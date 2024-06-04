import 'package:clario_test_assignment/theme/colors.dart';
import 'package:flutter/material.dart';

class PageTitle extends StatelessWidget {
  final String text;

  const PageTitle({super.key, required this.text});

  @override
  Widget build(BuildContext context) {
    // TODO chack Title Widget
    return Center(
      child: Text(
        text,
        style: const TextStyle(
            height: 1,
            fontSize: 28.0,
            fontWeight: FontWeight.w700,
            color: AppColors.textPrimary),
      ),
    );
  }
}
