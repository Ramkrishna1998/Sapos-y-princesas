import { ErrorBoundary } from '../libs';

type Props = {
  children: JSX.Element;
};

const AllProviders = ({ children }: Props): JSX.Element => (
  <>
    <ErrorBoundary>{children}</ErrorBoundary>
  </>
);

export default AllProviders;
