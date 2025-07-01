import { TestProps } from "../App";

export function TestComponent({storeHook}: TestProps) {

    // Access Zustand store using the applogic hook
  const { counter, setCounter } = storeHook();  // Use destructuring to get counter and setCounter

  // Calculate total based on counter
  const total = counter * 3;

  // Handle click to update the counter
  const handle = () => {
    setCounter(counter + 1);  // Increment the counter by 1
  };

    return (
        <>
        <button 
            className="btn btn-primary" 
            type="submit" 
            onClick={handle}>CLICK ME!</button>
            <p>
                This is current value: {counter}
                Statistics: {total}
            </p>
       </>
    )
}