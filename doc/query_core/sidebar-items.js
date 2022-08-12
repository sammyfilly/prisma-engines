window.SIDEBAR_ITEMS = {"externcrate":[["schema",""],["schema_builder",""]],"mod":[["error",""],["executor","What the executor module DOES:"],["interactive_transactions",""],["interpreter",""],["metrics","Query Engine Metrics This crate is responsible for capturing and recording metrics in the Query Engine. Metrics is broken into two parts, `MetricsRecorder` and `MetricsRegistry`, and uses our tracing framework to communicate. An example best explains this system. When the engine boots up, the `MetricRegistry` is added to our tracing as a layer and The MetricRecorder is set as the global metric recorder. When a metric value is recorded `gauge_increment!(\"my_gauge\", 1.0)` is called. The Metric Recorder is called with `register_gauge` and returns a `MetricHandle`. The `MetricHandle` will convert ``gauge_increment!(“my_gauge”, 1.0)`into a`trace!` message."],["query_ast",""],["query_document","Intermediate representation of the input document that is used by the query engine to build query ASTs and validate the incoming data."],["query_graph",""],["query_graph_builder","Query graph builder module. tbd"],["response_ir","Prisma Response IR (Intermediate Representation)."],["result_ast",""],["trace_helpers",""]],"type":[["Result","Result type tying all sub-result type hierarchies of the core together."]]};