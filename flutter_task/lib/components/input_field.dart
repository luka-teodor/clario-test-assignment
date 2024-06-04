import 'dart:math';

import 'package:clario_test_assignment/models/common.dart';
import 'package:clario_test_assignment/theme/colors.dart';
import 'package:flutter/material.dart';

class InputField extends StatelessWidget with InputFieldHelpers {
  final String placeholder;
  final bool obscureText;
  final InputState inputState;
  final IconButton? suffixIcon;
  final TextEditingController? controller;
  final FocusNode? focusNode;
  final Function(String) onChanged;

  const InputField(
      {required this.placeholder,
      this.obscureText = false,
      this.inputState = InputState.normal,
      this.suffixIcon,
      this.controller,
      this.focusNode,
      required this.onChanged,
      super.key});

  @override
  Widget build(BuildContext context) {
    return TextField(
      onChanged: onChanged,
      obscureText: obscureText,
      decoration: InputDecoration(
          contentPadding:
              const EdgeInsets.symmetric(vertical: 10, horizontal: 20),
          enabledBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(10),
            borderSide:
                BorderSide(color: _getBorderColor(inputState), width: 1),
          ),
          filled: true,
          fillColor: AppColors.bg0,
          hintText: placeholder,
          hintStyle: const TextStyle(
            color: AppColors.textSecondary,
          ),
          focusedBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(10),
            borderSide: BorderSide(
              color: _getBorderColor(inputState, isFocused: true),
              width: 1,
            ),
          ),
          focusColor: Colors.green, // AppColors.textPrimary,
          suffixIcon: suffixIcon),
      style: TextStyle(color: _getTextColor(inputState)),
      focusNode: focusNode,
      controller: controller,
    );
  }
}

mixin InputFieldHelpers {
  Color _getBorderColor(InputState state, {bool isFocused = false}) {
    Color color;
    switch (state) {
      case InputState.success:
        color = AppColors.borderSuccess;
        break;
      case InputState.error:
        color = AppColors.error;
        break;
      case InputState.normal:
      default:
        color = isFocused ? AppColors.borderFocused : AppColors.borderDefault;
    }
    return color;
  }

  Color _getTextColor(InputState state) {
    Color color;
    switch (state) {
      case InputState.success:
        color = AppColors.textSuccess;
        break;
      case InputState.error:
        color = AppColors.textError;
        break;
      case InputState.normal:
      default:
        color = AppColors.textPrimary;
    }
    return color;
  }
}
