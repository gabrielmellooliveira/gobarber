import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
	process.env.NODE_ENV === 'development'
		? console.tron.createSagaMonitor()
		: null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const moddlewares = [sagaMiddleware];

const store = createStore(rootReducer, moddlewares);

sagaMiddleware.run(rootSaga);

export default store;
