import React from 'react';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    errorMessage: '',
  };

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error, errorInfo) {
    // Você também pode registrar o erro em um serviço de relatórios de erro
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <p>
          An error has occurred: <b>{this.state.errorMessage}</b>
        </p>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
