import 'package:clario_test_assignment/components/input_field.dart';
import 'package:clario_test_assignment/models/common.dart';
import 'package:clario_test_assignment/theme/colors.dart';
import 'package:flutter/material.dart';

class PasswordField extends StatefulWidget {
  final Function(String) onChanged;
  final InputState inputState;

  const PasswordField(
      {super.key,
      required this.onChanged,
      this.inputState = InputState.normal});

  @override
  State<PasswordField> createState() => _PasswordFieldState();
}

class _PasswordFieldState extends State<PasswordField>
    with PasswordFieldHelpers {
  final FocusNode _focusNode = FocusNode();
  final TextEditingController _controller = TextEditingController();
  bool _obscureText = true;

  @override
  void dispose() {
    _focusNode.dispose();
    _controller.dispose();
    super.dispose();
  }

  void _toggleVisibility() {
    setState(() {
      _obscureText = !_obscureText;
    });
  }

  void _requestFocus() {
    setState(() {
      _focusNode.requestFocus();
    });
  }

  @override
  Widget build(BuildContext context) {
    return InputField(
      onChanged: widget.onChanged,
      placeholder: 'Create your password',
      obscureText: _obscureText,
      inputState: widget.inputState,
      suffixIcon: IconButton(
        icon: Icon(
          _obscureText ? Icons.visibility_off : Icons.visibility,
          color: _getIconColor(widget.inputState),
        ),
        onPressed: () {
          _requestFocus();
          _toggleVisibility();
        },
      ),
      controller: _controller,
      focusNode: _focusNode,
    );
  }
}

mixin PasswordFieldHelpers {
  Color _getIconColor(InputState inputState) {
    Color color;
    switch (inputState) {
      case InputState.success:
        color = AppColors.iconSuccess;
        break;
      case InputState.error:
        color = AppColors.iconError;
        break;
      default:
        color = AppColors.iconDefault;
    }
    return color;
  }
}
