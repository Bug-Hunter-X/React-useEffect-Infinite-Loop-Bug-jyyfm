# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook and its dependency array. The `MyComponent` functional component uses `useEffect` to update a counter every second. However, due to an incorrect dependency array, the effect runs repeatedly, leading to an infinite loop and performance issues.

## Problem

The `useEffect` hook's dependency array is missing the `count` variable. This means that the effect is triggered on every render, regardless of changes to `count`. This creates a loop where the counter continuously updates, causing React to re-render endlessly.

## Solution

The solution involves including the `count` variable in the dependency array. This ensures that the effect only runs when `count` changes.