```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count + 1); //Use functional update to avoid stale closure 
    }, 1000);
    return () => clearInterval(interval);
  }, [count]); // Include 'count' in dependency array

  return <div>Count: {count}</div>;
}
```