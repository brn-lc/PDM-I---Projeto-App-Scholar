/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AuthProvider } from './context/AuthContext';
import AppNavigator from './navigation/AppNavigator';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="max-w-[480px] mx-auto min-h-screen bg-slate-50 shadow-2xl relative overflow-hidden">
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </div>
  );
}

