import 'package:clario_test_assignment/models/common.dart';

// get password errors
List<dynamic> validatePassword(String password) {
  bool lengthError =
      password.length < 8 || password.length > 64 || password.contains(' ');
  bool caseError = !RegExp(r'[a-z]').hasMatch(password) ||
      !RegExp(r'[A-Z]').hasMatch(password);
  bool digitError = !RegExp(r'\d').hasMatch(password);
  bool hasError = lengthError || caseError || digitError;

  PasswordErrors errors = PasswordErrors(
      lenghtError: lengthError, caseError: caseError, digitError: digitError);

  return [errors, hasError];
}

// get validation errors
List<dynamic> validateEmail(String email) {
  bool formatError = !RegExp(r'^[^\s@]+@[^\s@]+\.[^\s@]+$').hasMatch(email);

  if (formatError) {
    return [
      EmailErrors(formatError: true),
      true,
    ];
  }

  return [EmailErrors(), false];
}

// Simulate API call
Future<void> submitForm({int delay = 0, SignupAPIError? error}) async {
  return await Future.delayed(Duration(milliseconds: delay), () {
    if (error != null) {
      throw error;
    }
  });
}
