// Inspired by react-hot-toast library
import { useState, useEffect } from "react";
import { TOAST_FADE_DURATION } from "@/components/ui/toast";

const TOAST_LIMIT = 20;
const TOAST_VISIBLE_DURATION = 4000; // how long a toast stays fully shown before it fades out on its own

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
};

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_VALUE;
  return count.toString();
}

const toastTimeouts = new Map();

// Always clears any previously scheduled timeout for this id first, so a
// manual dismiss can pre-empt the toast's own auto-dismiss timer (and vice versa).
const scheduleToastTimeout = (toastId, delay, action) => {
  const existing = toastTimeouts.get(toastId);
  if (existing) {
    clearTimeout(existing);
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    action();
  }, delay);
  toastTimeouts.set(toastId, timeout);
};

const addToRemoveQueue = (toastId) => {
  scheduleToastTimeout(toastId, TOAST_FADE_DURATION, () => {
    dispatch({
      type: actionTypes.REMOVE_TOAST,
      toastId,
    });
  });
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TOAST:
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case actionTypes.UPDATE_TOAST:
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };

    case actionTypes.DISMISS_TOAST: {
      const { toastId } = action;

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                // Flipping this to false is what triggers the fade-out transition
                // in Toast (src/components/ui/toast.jsx) — actual removal from the
                // array happens TOAST_FADE_DURATION later, via addToRemoveQueue above.
                open: false,
              }
            : t
        ),
      };
    }
    case actionTypes.REMOVE_TOAST:
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
  }
};

const listeners = [];

let memoryState = { toasts: [] };

function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

function toast({ ...props }) {
  const id = genId();

  const update = (props) =>
    dispatch({
      type: actionTypes.UPDATE_TOAST,
      toast: { ...props, id },
    });

  const dismiss = () =>
    dispatch({ type: actionTypes.DISMISS_TOAST, toastId: id });

  dispatch({
    type: actionTypes.ADD_TOAST,
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  // Starts the fade-out once the toast has been fully visible for a while.
  scheduleToastTimeout(id, TOAST_VISIBLE_DURATION, dismiss);

  return {
    id,
    dismiss,
    update,
  };
}

function useToast() {
  const [state, setState] = useState(memoryState);

  useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return {
    ...state,
    toast,
    // Same DISMISS_TOAST path as the auto-timer: starts the fade-out immediately
    // (pre-empting whatever timer was pending) instead of yanking the toast away.
    dismiss: (toastId) => dispatch({ type: actionTypes.DISMISS_TOAST, toastId }),
  };
}

export { useToast, toast };
