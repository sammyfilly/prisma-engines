initSidebarItems({"enum":[["GaugeValue","Value of a gauge operation."],["Unit","Units for a given metric."]],"fn":[["recorder","Returns a reference to the recorder."],["set_boxed_recorder","Sets the global recorder to a `Box<Recorder>`."],["set_recorder","Sets the global recorder to a `&'static Recorder`."],["set_recorder_racy","A thread-unsafe version of [`set_recorder`]."],["try_recorder","Returns a reference to the recorder."]],"macro":[["absolute_counter","Sets a counter to an absolute value."],["counter","Increments a counter."],["decrement_gauge","Decrements a gauge."],["describe_counter","Describes a counter."],["describe_gauge","Describes a gauge."],["describe_histogram","Describes a histogram."],["gauge","Updates a gauge."],["histogram","Records a histogram."],["increment_counter","Increments a counter by one."],["increment_gauge","Increments a gauge."],["register_counter","Registers a counter."],["register_gauge","Registers a gauge."],["register_histogram","Registers a histogram."]],"struct":[["Counter","A counter."],["Gauge","A gauge."],["Histogram","A histogram."],["Key","A metric identifier."],["KeyHasher","Key-specific hashing algorithm."],["KeyName","Name component of a key."],["Label","Metadata for a metric key in the form of a key/value pair."],["NoopRecorder","A no-op recorder."],["SetRecorderError","The type returned by [`set_recorder`] if [`set_recorder`] has already been called."]],"trait":[["CounterFn","A counter handler."],["GaugeFn","A gauge handler."],["HistogramFn","A histogram handler."],["IntoF64","An object which can be converted into a `f64` representation."],["IntoLabels","A value that can be converted to a vector of [`Label`]s."],["Recorder","A trait for registering and recording metrics."]],"type":[["SharedString","An allocation-optimized string."]]});