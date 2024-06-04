import 'package:flutter/material.dart';

class AppColors {
  // Common colors
  static const Color success = Color(0xFF27B274);
  static const Color success70 = Color(0xB327B274);
  static const Color error = Color(0xFFFF8080);
  static const Color error10 = Color(0x1AFF8080);

  // Text colors
  static const Color textPrimary = Color(0xFF4A4E71);
  static const Color textSecondary = Color(0xFF6F91BC);
  static const Color textSuccess = success;
  static const Color textError = error;
  static const Color text0 = Colors.white;

  // Background colors
  static const Color bg0 = Colors.white;

  // Icon colors
  static const Color iconDefault = Color(0xFF6F91BC);
  static const Color iconSuccess = success;
  static const Color iconError = error;

  // Border colors
  static const Color borderDefault = Colors.white;
  static const Color borderFocused = Color(0xFF6F91BC);
  static const Color borderSuccess = success;
  static const Color borderError = error;

  // Gradients
  static const LinearGradient gradientPrimary = LinearGradient(
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
    colors: [Color(0xFF70C3FF), Color(0xFF4B65FF)],
  );
  static const LinearGradient gradientBgApp = LinearGradient(
    begin: Alignment.topCenter,
    end: Alignment.bottomCenter,
    colors: [Color(0xFFF4F9FF), Color(0xFFE0EDFB)],
  );
}
