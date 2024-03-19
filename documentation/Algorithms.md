# Algorithm Documentation

## Base Algorithm

The Base Algorithm serves as a fundamental comparison point and does not calculate the maximum score. It offers a basic approach for assigning shipments (street addresses) to drivers, making it suitable for comparing results with other algorithms.

### Time Complexity

The time complexity of the Base Algorithm is O(N), where N is the number of shipments or drivers.

### Pros

- Simple and easy to understand.
- Quick execution time for small datasets.

### Cons

- Does not maximize the suitability score.
- Limited optimization capabilities.

## Hungarian Algorithm

The Hungarian Algorithm is a more sophisticated approach to the assignment problem, aiming to maximize the suitability score by finding the optimal assignment of shipments to drivers.

### Time Complexity

The time complexity of the Hungarian Algorithm is O(N^3), where N is the number of shipments or drivers.

### Pros

- Maximizes the suitability score.
- Provides an optimal solution for the assignment problem.

### Cons

- Higher time complexity, especially for larger datasets.
- May not scale well for very large datasets.

## Additional Algorithms Ideas

- **Greedy Algorithm**: A greedy algorithm selects the best option at each step with the hope of finding a global optimum. It could be implemented to improve upon the simplicity of the Base Algorithm and potentially provide better results.
- **Dynamic Algorithm Selection**: Implement logic to dynamically select the algorithm based on the size of the input files. For smaller datasets, use simpler algorithms like the Base Algorithm or Greedy Algorithm. For larger datasets, switch to more complex algorithms like the Hungarian Algorithm.
- **Parallel Implementation**: Explore parallel computing techniques to improve the performance of the Hungarian Algorithm, especially for large datasets.

## Implementing New Algorithms
1. Define a new Algorithm Constant in AlgorithmType enum.
2. Create a new Algorithm class within the 'algorithms' folder.
3. Ensure that this Algorithm class implements the AlgorithmInterface, including the method 'assignShipmentsToDrivers()'.
4. Add the new Algorithm class to the AlgorithmFactory (AlgorithmFactory.ts).
5. Update the app.config.json file to include the newly implemented Algorithm.
6. Verify the functionality of the new Algorithm with Test Cases and compare its performance to the Base Algorithm.
