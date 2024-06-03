import * as path from 'path'
import * as vscode from 'vscode'

export function getUriFromRelativePathFactory(context: vscode.ExtensionContext, panel: vscode.WebviewPanel) {
  return (...paths: string[]) => panel.webview.asWebviewUri(vscode.Uri.file(path.join(context.extensionPath, ...paths)))
}

export function createCspString(config: Record<string, string>) {
  return Object.entries(config)
    .map(([key, value]) => `${key} ${value};`)
    .join()
}

/**
 * A helper function that returns a unique alphanumeric identifier called a nonce.
 *
 * @remarks This function is primarily used to help enforce content security
 * policies for resources/scripts being executed in a webview context.
 *
 * @returns A nonce
 */
export function getNonce() {
  let text = ''
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < 32; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}