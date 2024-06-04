class PasswordErrors {
  final bool lenghtError;
  final bool caseError;
  final bool digitError;

  PasswordErrors({
    required this.lenghtError,
    required this.caseError,
    required this.digitError,
  });
}

class EmailErrors {
  final bool? formatError;

  EmailErrors({this.formatError});
}

class SignupAPIError {
  final String? email;
  final String? password;

  SignupAPIError({this.email, this.password});
}

enum HintState {
  info,
  error,
  success,
}

enum InputState { normal, error, success }
