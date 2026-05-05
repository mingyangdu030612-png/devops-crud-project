const loadtest = require("loadtest");

const options = {
  url: "http://localhost:3000/tasks",
  maxRequests: 500,
  concurrency: 50,
  method: "GET"
};

loadtest.loadTest(options, (error, result) => {
  if (error) {
    console.error("Load test failed:", error);
    return;
  }

  console.log("Load test completed");
  console.log("Total requests:", result.totalRequests);
  console.log("Total errors:", result.totalErrors);
  console.log("Requests per second:", result.rps);
  console.log("Mean latency:", result.meanLatencyMs, "ms");
  console.log("Max latency:", result.maxLatencyMs, "ms");
});