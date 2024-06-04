import 'package:clario_test_assignment/components/input_field.dart';
import 'package:clario_test_assignment/components/input_hint.dart';
import 'package:clario_test_assignment/components/password_field.dart';
import 'package:clario_test_assignment/components/password_hints.dart';
import 'package:clario_test_assignment/models/common.dart';
import 'package:flutter/material.dart';

class SignupFields extends StatelessWidget {
  final Function(String) onEmailChanged;
  final Function(String) onPasswordChanged;
  final InputState emailInputState;
  final InputState passwordInputState;
  final EmailErrors emailErrors;
  final PasswordErrors passwordErrors;
  final SignupAPIError? apiError;

  const SignupFields(
      {super.key,
      required this.onEmailChanged,
      required this.onPasswordChanged,
      required this.emailInputState,
      required this.passwordInputState,
      required this.emailErrors,
      required this.passwordErrors,
      this.apiError});

  String _getApiErrorText() {
    final String emailError = apiError?.email ?? "";
    final String passwordError = apiError?.password ?? "";
    String text = "$emailError $passwordError";
    text = text.trim();

    return text.isNotEmpty
        ? text.replaceAll(RegExp(r'\.'), ".\n")
        : "Something went wrong.";
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        InputField(
          placeholder: 'Your Email',
          onChanged: onEmailChanged,
          inputState: emailInputState,
        ),
        // TODO email format error ?
        const SizedBox(height: 20.0),
        PasswordField(
          onChanged: onPasswordChanged,
          inputState: passwordInputState,
        ),
        const SizedBox(height: 20.0),
        if (apiError?.password == null)
          PasswordHints(
              emailInputState: emailInputState,
              passwordInputState: passwordInputState,
              emailErrors: emailErrors,
              passwordErrors: passwordErrors),
        if (apiError?.password != null)
          Center(
              child: InputHint(
                  hintState: HintState.error, text: _getApiErrorText()))
      ],
    );
  }
}
