var topics = {};

MPubSub = MPubSub || {};

MPubSub.publish = function(key, args) {
	if (!topics[key]) return;

	var subscribers = topics[key],
		len = subscribers ? subscribers.length : 0;

	while (len--) {
		subscribers[len].func(args);
	}
};

MPubSub.subscribe = function(key, func) {
	if (!topics[key]) {
		topics[key] = [];
	}

	var _id = Random.id();

	topics[key].push({
		_id: _id,
		func: func
	});

	return _id;
};

MPubSub.unsubscribe = function(_id) {
	_.each(topics, function(topic, i) {
		_.each(topic, function(t, ii) {
		    if (t._id === _id) {
				topics[i].splice(ii, 1);
			}
		})
	});
};
