// Name: Bezier Curve
// ID: Den4ik12BezierCurve
// Description: Blocks for describe Bezier Curves.
// By: Den4ik-12 <https://scratch.mit.edu/users/Den4ik-12/>
// License: LGPL-3.0

(function (Scratch) {
  "use strict";

  if (!Scratch.extensions.unsandboxed) {
    throw new Error(
      '\nBezier Curve:\nExtension "Bezier Curve" must run unsandboxed!\n',
    );
  }

  const extIcon =
    "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwLDAsMjAwLDIwMCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0MCwtODApIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTE0MywxODBjMCwtNTMuNTcxNjEgNDMuNDI4MzksLTk3IDk3LC05N2M1My41NzE2MSwwIDk3LDQzLjQyODM5IDk3LDk3YzAsNTMuNTcxNjEgLTQzLjQyODM5LDk3IC05Nyw5N2MtNTMuNTcxNjEsMCAtOTcsLTQzLjQyODM5IC05NywtOTd6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0iIzdiYzIwMCIgc3Ryb2tlPSIjNTY4NzAxIiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTE4Mi4xMzExNCwyMDAuNjQ5ODljMjIuNDgxMywtODMuNzYwNyAxMDEuMjMwMDMsNDAuMzg2NDYgMTE2LjAzOTg3LC0zNS45NTYwMiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2QwZmY4MCIgc3Ryb2tlLXdpZHRoPSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48cGF0aCBkPSJNMTg1LjgxNDE4LDE4Ni43NjAzOWwtMy44MTQxOCwxNC4yMzk2MSIvPjxwYXRoIGQ9Ik0xOTAuOTg1NzIsMTY3LjQ1MzMzbDQuMDg0OTQsLTE1LjI1MDQ2Ii8+PHBhdGggZD0iTTIwMy45NTY2NiwxMTkuMDI4NDhsLTMuNzEwNjksMTMuODUzMjUiLz48cGF0aCBkPSJNMjI2LjE4MzkyLDE1MS41Mjg1NGwtNy43NDQzMSwtMTIuMzMxNzEiLz48cGF0aCBkPSJNMjQ2LjcxMjk2LDE4NC4yMTgwOGwtOS44OTExNSwtMTUuNzUwMjMiLz48cGF0aCBkPSJNMjU3LjMzMDYzLDIwMS4xMjUybDkuOTMxNTMsMTUuODE0NTQiLz48cGF0aCBkPSJNMjg1LjY0NjA5LDIyOC4zMjg0OGMwLDAgLTEuNzQwOSw4Ljk5NDY1IC0yLjE5Njk0LDExLjM1MDg2Yy0wLjIwNjIsMS4wNjUzOCAtMS4xNjQ4NiwxLjE4MSAtMS42OTcsMC4zMzM2NGMtMC45NDQ3MSwtMS41MDQzMiAtMy45MzI3OCwtNi4yNjIzOSAtMy45MzI3OCwtNi4yNjIzOSIvPjxwYXRoIGQ9Ik0yOTEuOTE0NSwxOTUuOTQxNzdsLTIuNDY3MywxMi43NDc3Ii8+PHBhdGggZD0iTTI5OCwxNjQuNWwtMi4yOTczMiwxMS44Njk1Ii8+PC9nPjxwYXRoIGQ9Ik0xNzQuNSwyMDFjMCwtNC4xNDIxNCAzLjM1Nzg2LC03LjUgNy41LC03LjVjNC4xNDIxNCwwIDcuNSwzLjM1Nzg2IDcuNSw3LjVjMCw0LjE0MjE0IC0zLjM1Nzg2LDcuNSAtNy41LDcuNWMtNC4xNDIxNCwwIC03LjUsLTMuMzU3ODYgLTcuNSwtNy41eiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiNhMmZmMDAiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTI5MC41LDE2NGMwLC00LjE0MjE0IDMuMzU3ODYsLTcuNSA3LjUsLTcuNWM0LjE0MjE0LDAgNy41LDMuMzU3ODYgNy41LDcuNWMwLDQuMTQyMTQgLTMuMzU3ODYsNy41IC03LjUsNy41Yy00LjE0MjE0LDAgLTcuNSwtMy4zNTc4NiAtNy41LC03LjV6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0iI2EyZmYwMCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMTk2LjUsMTE4YzAsLTQuMTQyMTQgMy4zNTc4NiwtNy41IDcuNSwtNy41YzQuMTQyMTQsMCA3LjUsMy4zNTc4NiA3LjUsNy41YzAsNC4xNDIxNCAtMy4zNTc4Niw3LjUgLTcuNSw3LjVjLTQuMTQyMTQsMCAtNy41LC0zLjM1Nzg2IC03LjUsLTcuNXoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSIjYTJmZjAwIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0yNzYsMjQyYzAsLTQuMTQyMTQgMy4zNTc4NiwtNy41IDcuNSwtNy41YzQuMTQyMTQsMCA3LjUsMy4zNTc4NiA3LjUsNy41YzAsNC4xNDIxNCAtMy4zNTc4Niw3LjUgLTcuNSw3LjVjLTQuMTQyMTQsMCAtNy41LC0zLjM1Nzg2IC03LjUsLTcuNXoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSIjYTJmZjAwIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjwvZz48L2c+PC9zdmc+";
  const blockIcon =
    "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMTcuMzMzMzMiIGhlaWdodD0iMTE3LjMzMzMzIiB2aWV3Qm94PSIwLDAsMTE3LjMzMzMzLDExNy4zMzMzMyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE4MS4zMzMzNiwtMTIxLjMzMzM3KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0xODEuMzMzMzcsMjM4LjY2Njd2LTExNy4zMzMzM2gxMTcuMzMzMzN2MTE3LjMzMzMzeiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9Ik5hTiIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48ZyBmaWxsPSJub25lIiBzdHJva2Utb3BhY2l0eT0iMC4xNDkwMiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIwIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjxwYXRoIGQ9Ik0xOTYuOTA2OTMsMTk1LjYwMjY5bDIuODMzODcsLTEwLjU3OTgiLz48cGF0aCBkPSJNMjAzLjU4MzE4LDE3MC42NzgwMmwzLjAzNTA1LC0xMS4zMzA4NSIvPjxwYXRoIGQ9Ik0yMTAuNDYzMzksMTQ0Ljk5MTg4bDIuNzU2OTgsLTEwLjI5Mjc1Ii8+PHBhdGggZD0iTTIyOS43MzQ4OSwxNTguODQ2MTZsLTUuNzUzOSwtOS4xNjIyNyIvPjxwYXRoIGQ9Ik0yNDQuOTg3NjQsMTgzLjEzMzk3bC03LjM0ODk3LC0xMS43MDIxOCIvPjxwYXRoIGQ9Ik0yNTIuODc2NCwxOTUuNjk1NzFsNy4zNzg5NywxMS43NDk5NSIvPjxwYXRoIGQ9Ik0yNzMuOTE0MzQsMjE1LjkwNzMyYzAsMCAtMS4yOTM0Niw2LjY4Mjg4IC0xLjYzMjMsOC40MzM1MWMtMC4xNTMyMSwwLjc5MTU2IC0wLjg2NTQ3LDAuODc3NDcgLTEuMjYwODQsMC4yNDc4OWMtMC43MDE5MSwtMS4xMTc2OSAtMi45MjIsLTQuNjUyODUgLTIuOTIyLC00LjY1Mjg1Ii8+PHBhdGggZD0iTTI3Ni43Mzg0OSwyMDEuMzE1ODRsMS44MzMxNiwtOS40NzEzNCIvPjxwYXRoIGQ9Ik0yODMuMDkzMSwxNjguNDgzNzZsLTEuNzA2ODcsOC44MTg4NSIvPjwvZz48cGF0aCBkPSJNMjA3LjY4MDIsMTMzLjkzNWMwLC0zLjA3NzU0IDIuNDk0ODUsLTUuNTcyMzggNS41NzIzOCwtNS41NzIzOGMzLjA3NzU0LDAgNS41NzIzOCwyLjQ5NDg1IDUuNTcyMzgsNS41NzIzOGMwLDMuMDc3NTQgLTIuNDk0ODUsNS41NzIzOCAtNS41NzIzOCw1LjU3MjM4Yy0zLjA3NzU0LDAgLTUuNTcyMzgsLTIuNDk0ODUgLTUuNTcyMzgsLTUuNTcyMzh6IiBmaWxsPSIjYTJmZjAwIiBzdHJva2Utb3BhY2l0eT0iMC4xNDkwMiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEyLjUiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTI2Ni43NDc0NSwyMjYuMDY1MDNjMCwtMy4wNzc1NCAyLjQ5NDg1LC01LjU3MjM4IDUuNTcyMzgsLTUuNTcyMzhjMy4wNzc1NCwwIDUuNTcyMzgsMi40OTQ4NSA1LjU3MjM4LDUuNTcyMzhjMCwzLjA3NzU0IC0yLjQ5NDg1LDUuNTcyMzggLTUuNTcyMzgsNS41NzIzOGMtMy4wNzc1NCwwIC01LjU3MjM4LC0yLjQ5NDg1IC01LjU3MjM4LC01LjU3MjM4eiIgZmlsbD0iI2EyZmYwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMTQ5MDIiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxMi41IiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0xOTcuMDA0MzcsMTk1LjM0MjU2YzE2LjcwMzI1LC02Mi4yMzI4OCA3NS4yMTIzMiwzMC4wMDY1IDg2LjIxNTgsLTI2LjcxNDc2IiBmaWxsPSJub25lIiBzdHJva2Utb3BhY2l0eT0iMC4xNDkwMiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMTk3LjAwNDM3LDE5NS4zNDI1NmMxNi43MDMyNSwtNjIuMjMyODggNzUuMjEyMzIsMzAuMDA2NSA4Ni4yMTU4LC0yNi43MTQ3NiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjExLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2QwZmY4MCIgc3Ryb2tlLXdpZHRoPSI3LjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTE5Ni45MDY5MywxOTUuNjAyNjlsMi44MzM4NywtMTAuNTc5OCIvPjxwYXRoIGQ9Ik0yMDMuNTgzMTgsMTcwLjY3ODAybDMuMDM1MDUsLTExLjMzMDg1Ii8+PHBhdGggZD0iTTIxMC40NjMzOSwxNDQuOTkxODhsMi43NTY5OCwtMTAuMjkyNzUiLz48cGF0aCBkPSJNMjI5LjczNDg5LDE1OC44NDYxNmwtNS43NTM5LC05LjE2MjI3Ii8+PHBhdGggZD0iTTI0NC45ODc2NCwxODMuMTMzOTdsLTcuMzQ4OTcsLTExLjcwMjE4Ii8+PHBhdGggZD0iTTI1Mi44NzY0LDE5NS42OTU3MWw3LjM3ODk3LDExLjc0OTk1Ii8+PHBhdGggZD0iTTI3My45MTQzNCwyMTUuOTA3MzJjMCwwIC0xLjI5MzQ2LDYuNjgyODggLTEuNjMyMyw4LjQzMzUxYy0wLjE1MzIxLDAuNzkxNTYgLTAuODY1NDcsMC44Nzc0NyAtMS4yNjA4NCwwLjI0Nzg5Yy0wLjcwMTkxLC0xLjExNzY5IC0yLjkyMiwtNC42NTI4NSAtMi45MjIsLTQuNjUyODUiLz48cGF0aCBkPSJNMjc2LjczODQ5LDIwMS4zMTU4NGwxLjgzMzE2LC05LjQ3MTM0Ii8+PHBhdGggZD0iTTI4My4wOTMxLDE2OC40ODM3NmwtMS43MDY4Nyw4LjgxODg1Ii8+PC9nPjxwYXRoIGQ9Ik0xOTEuMzM0NTUsMTk1LjYwMjY5YzAsLTMuMDc3NTQgMi40OTQ4NSwtNS41NzIzOCA1LjU3MjM4LC01LjU3MjM4YzMuMDc3NTQsMCA1LjU3MjM4LDIuNDk0ODUgNS41NzIzOCw1LjU3MjM4YzAsMy4wNzc1NCAtMi40OTQ4NSw1LjU3MjM4IC01LjU3MjM4LDUuNTcyMzhjLTMuMDc3NTQsMCAtNS41NzIzOCwtMi40OTQ4NSAtNS41NzIzOCwtNS41NzIzOHoiIGZpbGw9IiNhMmZmMDAiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTI3Ny41MjA3MiwxNjguMTEyMjdjMCwtMy4wNzc1NCAyLjQ5NDg1LC01LjU3MjM4IDUuNTcyMzgsLTUuNTcyMzhjMy4wNzc1NCwwIDUuNTcyMzgsMi40OTQ4NSA1LjU3MjM4LDUuNTcyMzhjMCwzLjA3NzU0IC0yLjQ5NDg1LDUuNTcyMzggLTUuNTcyMzgsNS41NzIzOGMtMy4wNzc1NCwwIC01LjU3MjM4LC0yLjQ5NDg1IC01LjU3MjM4LC01LjU3MjM4eiIgZmlsbD0iI2EyZmYwMCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjA3LjY4MDIsMTMzLjkzNWMwLC0zLjA3NzU0IDIuNDk0ODUsLTUuNTcyMzggNS41NzIzOCwtNS41NzIzOGMzLjA3NzU0LDAgNS41NzIzOCwyLjQ5NDg1IDUuNTcyMzgsNS41NzIzOGMwLDMuMDc3NTQgLTIuNDk0ODUsNS41NzIzOCAtNS41NzIzOCw1LjU3MjM4Yy0zLjA3NzU0LDAgLTUuNTcyMzgsLTIuNDk0ODUgLTUuNTcyMzgsLTUuNTcyMzh6IiBmaWxsPSIjYTJmZjAwIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0yNjYuNzQ3NDUsMjI2LjA2NTAzYzAsLTMuMDc3NTQgMi40OTQ4NSwtNS41NzIzOCA1LjU3MjM4LC01LjU3MjM4YzMuMDc3NTQsMCA1LjU3MjM4LDIuNDk0ODUgNS41NzIzOCw1LjU3MjM4YzAsMy4wNzc1NCAtMi40OTQ4NSw1LjU3MjM4IC01LjU3MjM4LDUuNTcyMzhjLTMuMDc3NTQsMCAtNS41NzIzOCwtMi40OTQ4NSAtNS41NzIzOCwtNS41NzIzOHoiIGZpbGw9IiNhMmZmMDAiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PC9nPjwvZz48L3N2Zz4=";
  const label = (text) => ({
    text: text,
    blockType: Scratch.BlockType.LABEL,
  });
  const interpolate = (procent, a, b) => {
    const multiplier = b - a;
    const result = (procent / 100) * multiplier + a;
    return result;
  };

  class BezierCurve {
    getInfo() {
      return {
        id: "Den4ik12BezierCurve",
        name: "Bezier Curve",
        color1: "#7BC200",
        color2: "#69A600",
        color3: "#568701",
        menuIconURI: extIcon,
        blockIconURI: blockIcon,
        blocks: [
          {
            opcode: "getPointPosInCurve",
            text: "[posType] position of main point in Bezier curve with control points [controlPoints] by [procent] %",
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              posType: {
                type: Scratch.ArgumentType.STRING,
                menu: "posType",
              },
              controlPoints: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "[[-100,0], [-100,100], [100,100], [100,0]]",
              },
              procent: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "50",
              },
            },
          },
          {
            opcode: "getIntermediatePointPosInCurve",
            text: "[posType] position of intermediate point № [pointNum] that describe [orderNum] -order Bezier curve in Bezier curve with control points [controlPoints] by [procent] %",
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              posType: {
                type: Scratch.ArgumentType.STRING,
                menu: "posType",
              },
              pointNum: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "1",
              },
              orderNum: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "1",
              },
              controlPoints: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "[[-100,0], [-100,100], [100,100], [100,0]]",
              },
              procent: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "50",
              },
            },
          },
        ],
        menus: {
          posType: ["x", "y"],
        },
      };
    }
    getPointPosInCurve(args) {
      try {
        let points = new Array();
        let controlPoints = JSON.parse(args.controlPoints);
        points.push(controlPoints);

        for (
          let orderNum = 0;
          orderNum < controlPoints.length - 1;
          orderNum++
        ) {
          let pointsOfThisOrder = new Array();

          for (
            let pointNumOfThisOrder = 0;
            pointNumOfThisOrder < points[orderNum].length - 1;
            pointNumOfThisOrder++
          ) {
            let posOfPointOfThisOrder = new Array();
            let pointXStart = points[orderNum][pointNumOfThisOrder][0];
            let pointXEnd = points[orderNum][pointNumOfThisOrder + 1][0];
            let pointYStart = points[orderNum][pointNumOfThisOrder][1];
            let pointYEnd = points[orderNum][pointNumOfThisOrder + 1][1];
            posOfPointOfThisOrder[0] = interpolate(
              args.procent,
              pointXStart,
              pointXEnd,
            );
            posOfPointOfThisOrder[1] = interpolate(
              args.procent,
              pointYStart,
              pointYEnd,
            );

            pointsOfThisOrder.push(posOfPointOfThisOrder);
          }

          points.push(pointsOfThisOrder);
        }

        switch (args.posType) {
          case "x": {
            return points[points.length - 1][0][0];
          }
          case "y": {
            return points[points.length - 1][0][1];
          }
          default: {
            return "";
          }
        }
      } catch {
        return "";
      }
    }

    getIntermediatePointPosInCurve(args) {
      try {
        let points = new Array();
        let controlPoints = JSON.parse(args.controlPoints);
        points.push(controlPoints);

        if (!(0 < args.orderNum < controlPoints.length - 1)) return "";

        for (
          let orderNum = 0;
          orderNum < controlPoints.length - 1;
          orderNum++
        ) {
          let pointsOfThisOrder = new Array();

          for (
            let pointNumOfThisOrder = 0;
            pointNumOfThisOrder < points[orderNum].length - 1;
            pointNumOfThisOrder++
          ) {
            let posOfPointOfThisOrder = new Array();
            let pointXStart = points[orderNum][pointNumOfThisOrder][0];
            let pointXEnd = points[orderNum][pointNumOfThisOrder + 1][0];
            let pointYStart = points[orderNum][pointNumOfThisOrder][1];
            let pointYEnd = points[orderNum][pointNumOfThisOrder + 1][1];
            posOfPointOfThisOrder[0] = interpolate(
              args.procent,
              pointXStart,
              pointXEnd,
            );
            posOfPointOfThisOrder[1] = interpolate(
              args.procent,
              pointYStart,
              pointYEnd,
            );

            pointsOfThisOrder.push(posOfPointOfThisOrder);
          }

          points.push(pointsOfThisOrder);
        }

        switch (args.posType) {
          case "x": {
            return points[args.orderNum][args.pointNum - 1][0];
          }
          case "y": {
            return points[args.orderNum][args.pointNum - 1][1];
          }
          default: {
            return "";
          }
        }
      } catch {
        return "";
      }
    }
  }
  Scratch.extensions.register(new BezierCurve());
})(Scratch);
