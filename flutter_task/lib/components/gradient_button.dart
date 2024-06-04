import 'package:clario_test_assignment/theme/colors.dart';
import 'package:flutter/material.dart';

class GradientButton extends StatelessWidget {
  final String text;
  final VoidCallback onPressed;

  const GradientButton(
      {required this.text, required this.onPressed, super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 240,
      decoration: BoxDecoration(
        gradient: AppColors.gradientPrimary,
        borderRadius: BorderRadius.circular(30.0),
      ),
      child: TextButton(
        onPressed: onPressed,
        child: Text(
          text,
          style: const TextStyle(
              height: 1.1,
              color: AppColors.text0,
              fontSize: 14.0,
              fontWeight: FontWeight.w700),
        ),
      ),
    );
  }
}
