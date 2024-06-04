import 'package:clario_test_assignment/models/common.dart';
import 'package:clario_test_assignment/theme/colors.dart';
import 'package:flutter/material.dart';

class InputHint extends StatelessWidget {
  final HintState hintState;
  final String text;

  const InputHint({super.key, required this.hintState, required this.text});

  Color _getTextColor() {
    Color color;
    switch (hintState) {
      case HintState.success:
        color = AppColors.success70;
        break;
      case HintState.error:
        color = AppColors.textError;
        break;
      case HintState.info:
      default:
        color = AppColors.textPrimary;
    }
    return color;
  }

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      style: TextStyle(
          height: 1.5,
          fontSize: 13.0,
          fontWeight: FontWeight.w400,
          color: _getTextColor()),
    );
  }
}
