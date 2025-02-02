import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { useTheme } from '@mui/material/styles';
import Button from '../util/Button';
import { Navigate, useNavigate } from 'react-router-dom';

const providers = [{ id: 'credentials', name: 'Email and password' }];

const signIn = async (provider, formData) => {
   
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      const email = formData?.get('email');
      const password = formData?.get('password');
      alert(
        `Signing in with "${provider.name}" and credentials: ${email}, ${password}`,
      );
      resolve({
        type: 'CredentialsSignin',
        error: 'Invalid credentials.',
      });
    }, 300);
  });
  return promise;
};

export default function NotificationsSignInPageError() {
    const navigate = useNavigate();
  const theme = useTheme();
  return (
    <>
    <AppProvider theme={theme}>
      <SignInPage
        signIn={signIn}
        providers={providers}
        slotProps={{ emailField: { autoFocus: false } }}
      />
         <div className="mt-4 text-center">
          <p className="text-gray-600">Don't have an account?</p>
          <Button className="mt-2 border border-gray-500 px-4 py-2" onClick={() => navigate('signup')}>
            Sign up here
          </Button>
        </div>
    </AppProvider>
    </>
  );
}