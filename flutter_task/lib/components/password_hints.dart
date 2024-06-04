import 'package:clario_test_assignment/components/input_hint.dart';
import 'package:clario_test_assignment/models/common.dart';
import 'package:flutter/material.dart';

class PasswordHints extends StatelessWidget {
  final InputState emailInputState;
  final InputState passwordInputState;
  final EmailErrors emailErrors;
  final PasswordErrors passwordErrors;

  const PasswordHints(
      {super.key,
      required this.emailInputState,
      required this.passwordInputState,
      required this.emailErrors,
      required this.passwordErrors});

  HintState _getHintState(InputState inputState, bool validationError) {
    HintState hintState = HintState.success;

    if (inputState == InputState.error) {
      hintState = validationError ? HintState.error : HintState.success;
    } else if (inputState == InputState.normal) {
      hintState = validationError ? HintState.info : HintState.success;
    }

    return hintState;
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
        padding: const EdgeInsets.only(left: 20.0),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          InputHint(
              hintState:
                  _getHintState(passwordInputState, passwordErrors.lenghtError),
              text: "8-64 characters (no spaces)"),
          InputHint(
              hintState:
                  _getHintState(passwordInputState, passwordErrors.caseError),
              text: "Uppercase and lowercase letters"),
          InputHint(
              hintState:
                  _getHintState(passwordInputState, passwordErrors.digitError),
              text: "At least one digit"),
        ]));
  }
}
