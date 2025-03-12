import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const GoogleCallback = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const code = searchParams.get('code');
    const error = searchParams.get('error');

    // Send message to parent window
    window.opener.postMessage({ code, error }, window.location.origin);
  }, [searchParams]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">Processing Sign In...</h2>
        <p className="text-gray-600">Please wait while we complete your sign in.</p>
      </div>
    </div>
  );
};

export default GoogleCallback; 