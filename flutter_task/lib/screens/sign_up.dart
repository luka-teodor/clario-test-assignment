import 'package:clario_test_assignment/components/gradient_button.dart';
import 'package:clario_test_assignment/components/signup_fields.dart';
import 'package:clario_test_assignment/components/page_title.dart';
import 'package:clario_test_assignment/components/signup_modal.dart';
import 'package:clario_test_assignment/models/common.dart';
import 'package:clario_test_assignment/theme/colors.dart';
import 'package:clario_test_assignment/utils/common.dart';
import 'package:flutter/material.dart';

class SignupScreen extends StatefulWidget {
  const SignupScreen({super.key});

  @override
  State<SignupScreen> createState() => _SignupScreenState();
}

class _SignupScreenState extends State<SignupScreen> {
  String _email = '';
  String _password = '';
  EmailErrors _emailErrors = EmailErrors(formatError: true);
  PasswordErrors _passwordErrors =
      PasswordErrors(lenghtError: true, caseError: true, digitError: true);
  InputState _emailInputState = InputState.normal;
  InputState _passwordInputState = InputState.normal;
  SignupAPIError? _apiError;

  void _updateEmail(String value) {
    setState(() {
      _email = value;

      if (_emailInputState != InputState.normal) {
        _emailInputState = InputState.normal;
        _emailErrors = EmailErrors(formatError: false);
        _apiError = null;
      }
    });
  }

  void _updatePassword(String value) {
    setState(() {
      _password = value;
      dynamic result = validatePassword(value);
      _passwordErrors = result[0] as PasswordErrors;
      _passwordInputState = InputState.normal;
      _apiError = null;
    });
  }

  void _onSubmit() {
    dynamic emailResult = validateEmail(_email);
    bool hasEmailError = emailResult[1];
    dynamic passwordResult = validatePassword(_password);
    bool hasPasswordError = passwordResult[1];

    if (hasEmailError || hasPasswordError) {
      setState(() {
        _emailErrors = emailResult[0] as EmailErrors;
        _emailInputState =
            hasEmailError ? InputState.error : InputState.success;
        _passwordErrors = passwordResult[0] as PasswordErrors;
        _passwordInputState =
            hasPasswordError ? InputState.error : InputState.success;
      });
      return;
    } else {
      setState(() {
        _emailInputState = InputState.success;
        _passwordInputState = InputState.success;
      });
    }

    SignupAPIError? error;
    // error = SignupAPIError(
    //     password:
    //         "This password doesn't look right. Please try again or reset it now. ");

    submitForm(error: error).then((_) => _showModal(context), onError: (error) {
      setState(() {
        _apiError = error as SignupAPIError;
        _emailInputState =
            error.email != null ? InputState.error : InputState.success;
        _passwordInputState =
            error.password != null ? InputState.error : InputState.success;
      });
    });
  }

  void _showModal(BuildContext context) {
    showDialog(
        context: context,
        builder: (BuildContext context) => SignupModal(onClose: () {
              Navigator.of(context).pop();
            }));
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      key: const Key('Gradient Container'),
      height: MediaQuery.of(context).size.height,
      padding: const EdgeInsets.fromLTRB(30, 57, 30, 30),
      decoration: const BoxDecoration(
        gradient: AppColors.gradientBgApp,
      ),
      child: Container(
        key: const Key('Bg image Container'),
        height: MediaQuery.of(context).size.height,
        padding: const EdgeInsets.only(top: 81),
        decoration: const BoxDecoration(
            image: DecorationImage(
                fit: BoxFit.none,
                alignment: Alignment(0.0, -1.0),
                image: AssetImage("images/stars_bg.png"))),
        child: Scaffold(
          backgroundColor: Colors.transparent,
          body: Column(
            children: [
              const PageTitle(text: 'Sign up'),
              const SizedBox(height: 40.0),
              SignupFields(
                  onEmailChanged: _updateEmail,
                  emailInputState: _emailInputState,
                  emailErrors: _emailErrors,
                  onPasswordChanged: _updatePassword,
                  passwordInputState: _passwordInputState,
                  passwordErrors: _passwordErrors,
                  apiError: _apiError),
              const SizedBox(height: 40.0),
              GradientButton(
                onPressed: _onSubmit,
                text: 'Sign up',
              ),
            ],
          ),
        ),
      ),
    );
  }
}
