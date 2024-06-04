import 'package:clario_test_assignment/screens/sign_up.dart';
import 'package:clario_test_assignment/theme/app_theme.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Clario Test Assignment',
      theme: appTheme,
      home: const SignupScreen(),
    );
  }
}
