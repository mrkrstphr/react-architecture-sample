import Loadable from 'react-loadable';

const defaults = { loading: () => null };

export default function makeAsyncModuleLoader(opts) {
  return Loadable({ ...defaults, ...opts });
}
