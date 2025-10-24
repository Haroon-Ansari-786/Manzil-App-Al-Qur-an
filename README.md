<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manzil - Advanced Mobile Quran App</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        /* Reset and Base Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary: #10b981;
            --primary-light: #6ee7b7;
            --primary-dark: #047857;
            --secondary: #06b6d4;
            --accent: #f59e0b;
            --success: #10b981;
            --danger: #ef4444;
            --warning: #f59e0b;
            --info: #3b82f6;
            --bg-light: #ffffff;
            --bg-light-alt: #f9fafb;
            --bg-dark: #1f2937;
            --bg-darker: #111827;
            --text-light: #1f2937;
            --text-light-alt: #6b7280;
            --text-dark: #f3f4f6;
            --text-dark-alt: #d1d5db;
            --border-light: #e5e7eb;
            --border-dark: #374151;
            --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
            --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
            --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
            --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);
        }

        html {
            scroll-behavior: smooth;
            height: 100%;
        }

        body {
            font-family: 'Poppins', sans-serif;
            background: var(--bg-light-alt);
            color: var(--text-light);
            transition: background-color 0.3s ease, color 0.3s ease;
            line-height: 1.6;
            height: 100%;
            overflow: hidden;
        }

        body.dark-mode {
            background: var(--bg-darker);
            color: var(--text-dark);
        }

        /* Mobile App Container */
        .app-container {
            height: 100vh;
            display: flex;
            flex-direction: column;
            max-width: 500px;
            margin: 0 auto;
            position: relative;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            background: var(--bg-light);
            overflow: hidden;
        }

        body.dark-mode .app-container {
            background: var(--bg-darker);
        }

        /* Status Bar */
        .status-bar {
            height: 24px;
            background: var(--primary);
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 16px;
            font-size: 12px;
            position: relative;
            z-index: 1000;
        }

        .status-bar .time {
            font-weight: 600;
        }

        .status-bar .icons {
            display: flex;
            gap: 4px;
        }

        /* Header */
        .header {
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            color: white;
            padding: 12px 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: var(--shadow-lg);
        }

        .header-left {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .logo i {
            animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
        }

        .header-right {
            display: flex;
            gap: 8px;
            align-items: center;
        }

        .header-btn {
            background: rgba(255, 255, 255, 0.2);
            border: none;
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            transition: all 0.3s ease;
        }

        .header-btn:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: scale(1.1);
        }

        /* Main Content Area */
        .main-content {
            flex: 1;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }

        /* Tab Content */
        .tab-content {
            flex: 1;
            overflow-y: auto;
            padding: 16px;
            display: none;
        }

        .tab-content.active {
            display: block;
            animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        /* Bottom Navigation */
        .bottom-nav {
            display: flex;
            background: var(--bg-light);
            border-top: 1px solid var(--border-light);
            height: 60px;
            position: sticky;
            bottom: 0;
            z-index: 1000;
        }

        body.dark-mode .bottom-nav {
            background: var(--bg-dark);
            border-top-color: var(--border-dark);
        }

        .nav-item {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            color: var(--text-light-alt);
            font-size: 10px;
            gap: 4px;
        }

        body.dark-mode .nav-item {
            color: var(--text-dark-alt);
        }

        .nav-item.active {
            color: var(--primary);
        }

        .nav-item i {
            font-size: 18px;
        }

        .nav-item:hover {
            background: var(--bg-light-alt);
        }

        body.dark-mode .nav-item:hover {
            background: rgba(255, 255, 255, 0.05);
        }

        /* Quran Tab */
        .surah-list {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .surah-item {
            padding: 16px;
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: var(--bg-light);
            box-shadow: var(--shadow-sm);
        }

        body.dark-mode .surah-item {
            background: var(--bg-dark);
        }

        .surah-item:hover {
            background: var(--primary-light);
            color: white;
            transform: translateX(4px);
        }

        .surah-item.active {
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            color: white;
            font-weight: 600;
            box-shadow: var(--shadow-md);
        }

        .surah-info {
            flex: 1;
        }

        .surah-name {
            font-weight: 600;
            font-size: 16px;
        }

        .surah-verses {
            font-size: 12px;
            opacity: 0.7;
        }

        .surah-number {
            background: var(--primary);
            color: white;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            font-weight: 700;
            margin-left: 8px;
        }

        .surah-item.active .surah-number {
            background: rgba(255, 255, 255, 0.3);
        }

        /* Verse Display */
        .verse-card {
            background: var(--bg-light);
            border-left: 4px solid var(--primary);
            padding: 16px;
            border-radius: 12px;
            box-shadow: var(--shadow-sm);
            transition: all 0.3s ease;
            margin-bottom: 16px;
            scroll-margin-top: 80px;
        }

        body.dark-mode .verse-card {
            background: var(--bg-dark);
            border-left-color: var(--secondary);
        }

        .verse-card:hover {
            box-shadow: var(--shadow-lg);
            transform: translateY(-2px);
        }

        .verse-card.active {
            background: var(--primary-light);
            color: white;
        }

        body.dark-mode .verse-card.active {
            background: var(--primary-dark);
        }

        .verse-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 12px;
        }

        .verse-number {
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            color: white;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            font-weight: 700;
            flex-shrink: 0;
        }

        .verse-meta {
            font-size: 14px;
            color: var(--text-light-alt);
        }

        body.dark-mode .verse-meta {
            color: var(--text-dark-alt);
        }

        .verse-text {
            font-family: 'Amiri', serif;
            font-size: 20px;
            line-height: 1.8;
            color: var(--text-light);
            margin-bottom: 16px;
            text-align: right;
            direction: rtl;
            font-weight: 500;
        }

        body.dark-mode .verse-text {
            color: var(--text-dark);
        }

        .verse-translation {
            background: var(--bg-light-alt);
            padding: 12px;
            border-radius: 8px;
            border-left: 3px solid var(--accent);
            margin-bottom: 12px;
            font-size: 14px;
            line-height: 1.6;
            color: var(--text-light);
        }

        body.dark-mode .verse-translation {
            background: rgba(255, 255, 255, 0.05);
            color: var(--text-dark);
        }

        .verse-transliteration {
            background: rgba(16, 185, 129, 0.05);
            padding: 10px 12px;
            border-radius: 8px;
            border-left: 3px solid var(--primary);
            margin-bottom: 12px;
            font-size: 13px;
            color: var(--text-light-alt);
            font-style: italic;
        }

        body.dark-mode .verse-transliteration {
            background: rgba(16, 185, 129, 0.1);
            color: var(--text-dark-alt);
        }

        .verse-actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .verse-btn {
            background: var(--bg-light-alt);
            border: 1px solid var(--border-light);
            color: var(--text-light);
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 12px;
            font-weight: 500;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        body.dark-mode .verse-btn {
            background: rgba(255, 255, 255, 0.05);
            border-color: var(--border-dark);
            color: var(--text-dark);
        }

        .verse-btn:hover {
            background: var(--primary);
            color: white;
            border-color: var(--primary);
            transform: translateY(-2px);
        }

        .verse-btn.active {
            background: var(--primary);
            color: white;
            border-color: var(--primary);
        }

        /* Audio Player in Navbar */
        .audio-player-nav {
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            color: white;
            padding: 8px 16px;
            display: none;
            align-items: center;
            gap: 12px;
            position: sticky;
            top: 56px;
            z-index: 999;
            box-shadow: var(--shadow-md);
        }

        .audio-player-nav.active {
            display: flex;
        }

        .player-nav-controls {
            display: flex;
            gap: 8px;
            align-items: center;
        }

        .player-nav-btn {
            background: rgba(255, 255, 255, 0.2);
            border: none;
            color: white;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            transition: all 0.3s ease;
        }

        .player-nav-btn:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: scale(1.1);
        }

        .player-nav-info {
            flex: 1;
            min-width: 0;
        }

        .player-nav-title {
            font-size: 14px;
            font-weight: 600;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .player-nav-reciter {
            font-size: 10px;
            opacity: 0.9;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .player-nav-progress {
            display: flex;
            align-items: center;
            gap: 8px;
            width: 100%;
        }

        .player-nav-bar {
            flex: 1;
            height: 4px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 2px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }

        .player-nav-fill {
            height: 100%;
            background: white;
            border-radius: 2px;
            width: 0%;
            transition: width 0.1s linear;
        }

        .player-nav-time {
            font-size: 10px;
            opacity: 0.9;
            min-width: 35px;
        }

        /* Audio Player */
        .audio-player {
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            color: white;
            padding: 16px;
            border-radius: 12px;
            margin-bottom: 16px;
            box-shadow: var(--shadow-lg);
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .player-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 12px;
        }

        .player-title {
            font-size: 16px;
            font-weight: 600;
        }

        .player-reciter {
            font-size: 12px;
            opacity: 0.9;
        }

        .player-controls {
            display: flex;
            gap: 12px;
            align-items: center;
            margin-bottom: 12px;
        }

        .player-btn {
            background: rgba(255, 255, 255, 0.2);
            border: none;
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            transition: all 0.3s ease;
        }

        .player-btn:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: scale(1.1);
        }

        .player-btn.play {
            width: 48px;
            height: 48px;
            background: rgba(255, 255, 255, 0.3);
            font-size: 18px;
        }

        .progress-container {
            flex: 1;
        }

        .progress-bar {
            width: 100%;
            height: 6px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 3px;
            cursor: pointer;
            margin-bottom: 6px;
            position: relative;
            overflow: hidden;
        }

        .progress-fill {
            height: 100%;
            background: white;
            border-radius: 3px;
            width: 0%;
            transition: width 0.1s linear;
        }

        .time-display {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            opacity: 0.9;
        }

        /* Prayer Times */
        .prayer-times {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            margin-bottom: 16px;
        }

        .prayer-time-card {
            background: var(--bg-light);
            padding: 16px;
            border-radius: 12px;
            text-align: center;
            box-shadow: var(--shadow-sm);
            transition: all 0.3s ease;
        }

        body.dark-mode .prayer-time-card {
            background: var(--bg-dark);
        }

        .prayer-time-card.active {
            background: var(--primary);
            color: white;
        }

        .prayer-name {
            font-weight: 600;
            font-size: 14px;
        }

        .prayer-time {
            font-size: 18px;
            font-weight: 700;
            margin-top: 8px;
        }

        /* Bookmarks */
        .bookmarks-container {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .bookmark-item {
            padding: 16px;
            background: var(--bg-light);
            border-radius: 12px;
            margin-bottom: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: all 0.3s ease;
            cursor: pointer;
            box-shadow: var(--shadow-sm);
        }

        body.dark-mode .bookmark-item {
            background: var(--bg-dark);
        }

        .bookmark-item:hover {
            background: var(--primary-light);
            color: white;
            transform: translateX(4px);
        }

        .bookmark-text {
            flex: 1;
            font-size: 14px;
        }

        .bookmark-remove {
            background: var(--danger);
            color: white;
            border: none;
            padding: 6px 12px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 12px;
            font-weight: 600;
            transition: all 0.3s ease;
        }

        .bookmark-remove:hover {
            background: #dc2626;
            transform: scale(1.05);
        }

        /* Settings */
        .settings-group {
            margin-bottom: 20px;
        }

        .settings-label {
            display: block;
            font-weight: 600;
            margin-bottom: 8px;
            color: var(--text-light);
        }

        body.dark-mode .settings-label {
            color: var(--text-dark);
        }

        .settings-input,
        .settings-select {
            width: 100%;
            padding: 12px;
            border: 1px solid var(--border-light);
            border-radius: 8px;
            font-size: 14px;
            background: var(--bg-light);
            color: var(--text-light);
            transition: all 0.3s ease;
        }

        body.dark-mode .settings-input,
        body.dark-mode .settings-select {
            background: var(--bg-darker);
            border-color: var(--border-dark);
            color: var(--text-dark);
        }

        .settings-input:focus,
        .settings-select:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
        }

        .checkbox-group {
            display: flex;
            align-items: center;
            gap: 10px;
            cursor: pointer;
        }

        .checkbox-group input[type="checkbox"] {
            width: 20px;
            height: 20px;
            cursor: pointer;
            accent-color: var(--primary);
        }

        .range-slider {
            width: 100%;
            height: 6px;
            border-radius: 3px;
            background: var(--border-light);
            outline: none;
            -webkit-appearance: none;
            appearance: none;
        }

        body.dark-mode .range-slider {
            background: var(--border-dark);
        }

        .range-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: var(--primary);
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .range-slider::-webkit-slider-thumb:hover {
            background: var(--primary-dark);
            transform: scale(1.2);
        }

        .range-slider::-moz-range-thumb {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: var(--primary);
            cursor: pointer;
            border: none;
            transition: all 0.3s ease;
        }

        .range-slider::-moz-range-thumb:hover {
            background: var(--primary-dark);
            transform: scale(1.2);
        }

        .range-value {
            display: inline-block;
            margin-left: 12px;
            font-weight: 600;
            color: var(--primary);
        }

        /* Surah Header */
        .surah-header {
            margin-bottom: 20px;
            padding-bottom: 16px;
            border-bottom: 2px solid var(--border-light);
        }

        body.dark-mode .surah-header {
            border-bottom-color: var(--border-dark);
        }

        .surah-title-section {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 16px;
            gap: 16px;
        }

        .surah-title-left h1 {
            font-size: 24px;
            font-weight: 700;
            color: var(--primary);
            margin-bottom: 8px;
        }

        .surah-arabic {
            font-family: 'Amiri', serif;
            font-size: 24px;
            text-align: right;
            direction: rtl;
            color: var(--primary);
            margin-bottom: 12px;
            font-weight: 700;
        }

        .surah-meta {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
            font-size: 14px;
        }

        .meta-item {
            display: flex;
            align-items: center;
            gap: 6px;
            color: var(--text-light-alt);
        }

        body.dark-mode .meta-item {
            color: var(--text-dark-alt);
        }

        .meta-item i {
            color: var(--primary);
            font-size: 14px;
        }

        .surah-actions {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            margin-top: 16px;
        }

        .action-btn {
            background: var(--primary);
            color: white;
            border: none;
            padding: 10px 16px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            font-size: 14px;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .action-btn:hover {
            background: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
        }

        .action-btn.secondary {
            background: var(--secondary);
        }

        .action-btn.secondary:hover {
            background: #0891b2;
        }

        /* Loading Spinner */
        .loading-spinner {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 200px;
        }

        .spinner {
            width: 40px;
            height: 40px;
            border: 4px solid var(--border-light);
            border-top-color: var(--primary);
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        body.dark-mode .spinner {
            border-color: var(--border-dark);
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        /* Empty State */
        .empty-state {
            text-align: center;
            padding: 40px 20px;
            color: var(--text-light-alt);
        }

        body.dark-mode .empty-state {
            color: var(--text-dark-alt);
        }

        .empty-state i {
            font-size: 48px;
            margin-bottom: 16px;
            color: var(--primary);
            opacity: 0.5;
        }

        /* Toast Notifications */
        .toast {
            position: fixed;
            bottom: 80px;
            left: 50%;
            transform: translateX(-50%);
            background: white;
            padding: 12px 20px;
            border-radius: 8px;
            box-shadow: var(--shadow-lg);
            animation: slideUp 0.3s ease;
            z-index: 3000;
            max-width: 90%;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        body.dark-mode .toast {
            background: var(--bg-dark);
            color: var(--text-dark);
        }

        @keyframes slideUp {
            from { transform: translateX(-50%) translateY(100px); opacity: 0; }
            to { transform: translateX(-50%) translateY(0); opacity: 1; }
        }

        .toast.success {
            border-left: 4px solid var(--success);
        }

        .toast.error {
            border-left: 4px solid var(--danger);
        }

        .toast.info {
            border-left: 4px solid var(--info);
        }

        .toast.warning {
            border-left: 4px solid var(--warning);
        }

        .toast-icon {
            font-size: 18px;
            flex-shrink: 0;
        }

        .toast.success .toast-icon { color: var(--success); }
        .toast.error .toast-icon { color: var(--danger); }
        .toast.info .toast-icon { color: var(--info); }
        .toast.warning .toast-icon { color: var(--warning); }

        /* Advanced Features */
        .tabs {
            display: flex;
            gap: 8px;
            margin-bottom: 16px;
            flex-wrap: wrap;
        }

        .tab {
            padding: 10px 16px;
            background: var(--bg-light);
            border: 1px solid var(--border-light);
            border-radius: 8px;
            cursor: pointer;
            font-weight: 500;
            transition: all 0.3s ease;
            color: var(--text-light);
            font-size: 14px;
        }

        body.dark-mode .tab {
            background: var(--bg-dark);
            border-color: var(--border-dark);
            color: var(--text-dark);
        }

        .tab.active {
            background: var(--primary);
            color: white;
            border-color: var(--primary);
        }

        .tab-content-panel {
            display: none;
        }

        .tab-content-panel.active {
            display: block;
        }

        /* Word by Word */
        .word-by-word {
            direction: rtl;
            text-align: right;
            margin-bottom: 16px;
            background: var(--bg-light-alt);
            padding: 16px;
            border-radius: 12px;
        }

        body.dark-mode .word-by-word {
            background: rgba(255, 255, 255, 0.05);
        }

        .word-item {
            display: inline-block;
            margin: 8px 4px;
            padding: 8px;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
        }

        .word-item:hover {
            background: var(--primary-light);
            color: white;
        }

        .word-arabic {
            font-family: 'Amiri', serif;
            font-size: 20px;
        }

        .word-translation {
            font-size: 12px;
            opacity: 0.7;
        }

        /* Tafsir */
        .tafsir-section {
            background: var(--bg-light);
            padding: 16px;
            border-radius: 12px;
            margin-bottom: 16px;
            border-left: 4px solid var(--accent);
        }

        body.dark-mode .tafsir-section {
            background: var(--bg-dark);
        }

        .tafsir-title {
            font-weight: 700;
            margin-bottom: 12px;
            color: var(--accent);
        }

        /* Memorization Tool */
        .memorization-tool {
            background: var(--bg-light);
            padding: 16px;
            border-radius: 12px;
            margin-bottom: 16px;
            box-shadow: var(--shadow-sm);
        }

        body.dark-mode .memorization-tool {
            background: var(--bg-dark);
        }

        .memorization-progress {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 12px;
        }

        .memorization-actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        /* Statistics */
        .stats-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            margin-bottom: 16px;
        }

        .stat-card {
            background: var(--bg-light);
            padding: 16px;
            border-radius: 12px;
            text-align: center;
            box-shadow: var(--shadow-sm);
        }

        body.dark-mode .stat-card {
            background: var(--bg-dark);
        }

        .stat-number {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 8px;
            color: var(--primary);
        }

        .stat-label {
            font-size: 12px;
            color: var(--text-light-alt);
        }

        body.dark-mode .stat-label {
            color: var(--text-dark-alt);
        }

        /* Progress Section */
        .progress-section {
            background: var(--bg-light);
            padding: 16px;
            border-radius: 12px;
            margin-bottom: 16px;
            box-shadow: var(--shadow-sm);
        }

        body.dark-mode .progress-section {
            background: var(--bg-dark);
        }

        .progress-label {
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 8px;
            color: var(--text-light);
        }

        body.dark-mode .progress-label {
            color: var(--text-dark);
        }

        .progress-bar-container {
            width: 100%;
            height: 8px;
            background: var(--border-light);
            border-radius: 4px;
            overflow: hidden;
        }

        body.dark-mode .progress-bar-container {
            background: var(--border-dark);
        }

        .progress-bar-fill {
            height: 100%;
            background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
            border-radius: 4px;
            transition: width 0.3s ease;
        }

        .progress-text {
            font-size: 12px;
            color: var(--text-light-alt);
            margin-top: 6px;
            text-align: right;
        }

        body.dark-mode .progress-text {
            color: var(--text-dark-alt);
        }

        /* Search */
        .search-container {
            margin-bottom: 16px;
        }

        .search-input {
            width: 100%;
            padding: 12px 16px;
            border: 1px solid var(--border-light);
            border-radius: 8px;
            font-size: 14px;
            transition: all 0.3s ease;
            background: var(--bg-light);
            color: var(--text-light);
        }

        body.dark-mode .search-input {
            background: var(--bg-darker);
            border-color: var(--border-dark);
            color: var(--text-dark);
        }

        .search-input:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
        }

        /* Responsive Adjustments */
        @media (max-width: 480px) {
            .app-container {
                max-width: 100%;
            }

            .verse-text {
                font-size: 18px;
            }

            .surah-title-left h1 {
                font-size: 20px;
            }

            .surah-arabic {
                font-size: 20px;
            }

            .prayer-times {
                grid-template-columns: 1fr;
            }

            .stats-container {
                grid-template-columns: 1fr;
            }
        }

        /* Scrollbar */
        ::-webkit-scrollbar {
            width: 6px;
        }

        ::-webkit-scrollbar-track {
            background: transparent;
        }

        ::-webkit-scrollbar-thumb {
            background: var(--primary);
            border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: var(--primary-dark);
        }

        body.dark-mode ::-webkit-scrollbar-thumb {
            background: var(--secondary);
        }
    </style>
</head>
<body>
    <!-- Mobile App Container -->
    <div class="app-container">
        <!-- Status Bar (Mock) -->
        <div class="status-bar">
            <div class="time" id="currentTime">12:30</div>
            <div class="icons">
                <i class="fas fa-signal"></i>
                <i class="fas fa-wifi"></i>
                <i class="fas fa-battery-three-quarters"></i>
            </div>
        </div>

        <!-- Header -->
        <div class="header">
            <div class="header-left">
                <div class="logo">
                    <i class="fas fa-book-quran"></i>
                    <span>Manzil</span>
                </div>
            </div>
            <div class="header-right">
                <button class="header-btn" id="searchBtn" title="Search">
                    <i class="fas fa-search"></i>
                </button>
                <button class="header-btn" id="themeBtn" title="Toggle Theme">
                    <i class="fas fa-moon"></i>
                </button>
            </div>
        </div>

        <!-- Audio Player in Navbar -->
        <div class="audio-player-nav" id="audioPlayerNav">
            <div class="player-nav-controls">
                <button class="player-nav-btn" onclick="toggleAudio()">
                    <i class="fas fa-pause" id="navPlayIcon"></i>
                </button>
            </div>
            <div class="player-nav-info">
                <div class="player-nav-title" id="navPlayerTitle">Loading...</div>
                <div class="player-nav-reciter" id="navPlayerReciter"></div>
            </div>
            <div class="player-nav-progress">
                <span class="player-nav-time" id="navCurrentAudioTime">0:00</span>
                <div class="player-nav-bar" onclick="seekNavAudio(event)">
                    <div class="player-nav-fill" id="navProgressFill"></div>
                </div>
                <span class="player-nav-time" id="navDuration">0:00</span>
            </div>
        </div>

        <!-- Main Content -->
        <div class="main-content" id="mainContent">
            <!-- Quran Tab -->
            <div class="tab-content active" id="quranTab">
                <div class="search-container" id="searchContainer" style="display: none;">
                    <input type="text" class="search-input" id="searchInput" placeholder="Search surahs or verses...">
                    <div id="searchResults" style="margin-top: 12px;"></div>
                </div>

                <div class="surah-header" id="surahHeader" style="display: none;">
                    <div class="surah-title-section">
                        <div class="surah-title-left">
                            <h1 id="surahName">Al-Fatiha</h1>
                            <div class="surah-arabic" id="surahArabic">الفاتحة</div>
                        </div>
                    </div>
                    <div class="surah-meta">
                        <div class="meta-item">
                            <i class="fas fa-book"></i>
                            <span id="surahVerses">7 Verses</span>
                        </div>
                        <div class="meta-item">
                            <i class="fas fa-map-marker"></i>
                            <span id="surahType">Meccan</span>
                        </div>
                    </div>
                    <div class="surah-actions">
                        <button class="action-btn" onclick="playSurahAudio()">
                            <i class="fas fa-play"></i> Play Audio
                        </button>
                        <button class="action-btn secondary" onclick="goBackToSurahList()">
                            <i class="fas fa-arrow-left"></i> Back
                        </button>
                    </div>
                </div>

                <div class="audio-player" id="audioPlayer" style="display: none;">
                    <div class="player-header">
                        <div>
                            <div class="player-title" id="playerTitle">Loading...</div>
                            <div class="player-reciter" id="playerReciter"></div>
                        </div>
                    </div>
                    <div class="player-controls">
                        <button class="player-btn" onclick="previousAudio()">
                            <i class="fas fa-step-backward"></i>
                        </button>
                        <button class="player-btn play" onclick="toggleAudio()">
                            <i class="fas fa-play" id="playIcon"></i>
                        </button>
                        <button class="player-btn" onclick="nextAudio()">
                            <i class="fas fa-step-forward"></i>
                        </button>
                        <div class="progress-container">
                            <div class="progress-bar" onclick="seekAudio(event)">
                                <div class="progress-fill" id="progressFill"></div>
                            </div>
                            <div class="time-display">
                                <span id="currentAudioTime">0:00</span>
                                <span id="duration">0:00</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="surahListContainer">
                    <h2 style="margin-bottom: 16px;">Surahs</h2>
                    <div class="surah-list" id="surahList">
                        <!-- Surah list will be loaded here -->
                    </div>
                </div>

                <div id="versesContainer" style="display: none;">
                    <div class="tabs">
                        <div class="tab active" data-tab="verses">Verses</div>
                        <div class="tab" data-tab="wordByWord">Word-by-Word</div>
                        <div class="tab" data-tab="tafsir">Tafsir</div>
                    </div>

                    <div class="tab-content-panel active" id="versesPanel">
                        <!-- Verses will be loaded here -->
                    </div>

                    <div class="tab-content-panel" id="wordByWordPanel">
                        <!-- Word-by-word content will be loaded here -->
                    </div>

                    <div class="tab-content-panel" id="tafsirPanel">
                        <!-- Tafsir content will be loaded here -->
                    </div>
                </div>
            </div>

            <!-- Prayer Times Tab -->
            <div class="tab-content" id="prayerTab">
                <h2 style="margin-bottom: 16px;">Prayer Times</h2>
                <div class="prayer-times" id="prayerTimesContainer">
                    <!-- Prayer times will be loaded here -->
                </div>

                <div style="background: var(--bg-light); padding: 16px; border-radius: 12px; margin-top: 16px;">
                    <h3 style="margin-bottom: 12px;">Qibla Direction</h3>
                    <div style="text-align: center; padding: 20px;">
                        <div style="width: 150px; height: 150px; border: 2px solid var(--primary); border-radius: 50%; margin: 0 auto; position: relative;">
                            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 80%; height: 2px; background: var(--danger);" id="qiblaNeedle"></div>
                        </div>
                        <div style="margin-top: 16px; font-size: 18px; font-weight: 700; color: var(--primary);" id="qiblaAngle">45° from North</div>
                    </div>
                </div>
            </div>

            <!-- Bookmarks Tab -->
            <div class="tab-content" id="bookmarksTab">
                <h2 style="margin-bottom: 16px;">My Bookmarks</h2>
                <div class="bookmarks-container" id="bookmarksList">
                    <!-- Bookmarks will be loaded here -->
                </div>
            </div>

            <!-- Settings Tab -->
            <div class="tab-content" id="settingsTab">
                <h2 style="margin-bottom: 16px;">Settings</h2>

                <div class="settings-group">
                    <label class="settings-label">Select Reciter</label>
                    <select id="reciterSelect" class="settings-select">
                        <option value="ar.alafasy">Mishary Rashid Alafasy</option>
                        <option value="ar.abdulbasit">Abdul Basit Abdul Samad</option>
                        <option value="ar.abdulsamad">Abdur-Rahman As-Sudais</option>
                        <option value="ar.husary">Mahmoud Khalil Al-Husary</option>
                        <option value="ar.ghamdi">Saad Al-Ghamdi</option>
                        <option value="ar.minshawi">Mohamed Siddiq Al-Minshawi</option>
                    </select>
                </div>

                <div class="settings-group">
                    <label class="settings-label">Arabic Font Size</label>
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <input type="range" id="fontSizeSlider" class="range-slider" min="18" max="32" value="24">
                        <span class="range-value" id="fontSizeValue">24px</span>
                    </div>
                </div>

                <div class="settings-group">
                    <label class="checkbox-group">
                        <input type="checkbox" id="translationToggle" checked>
                        <span>Show Translation</span>
                    </label>
                </div>

                <div class="settings-group">
                    <label class="checkbox-group">
                        <input type="checkbox" id="transliterationToggle" checked>
                        <span>Show Transliteration</span>
                    </label>
                </div>

                <div class="settings-group">
                    <label class="checkbox-group">
                        <input type="checkbox" id="wordByWordToggle">
                        <span>Show Word-by-Word</span>
                    </label>
                </div>

                <div class="settings-group">
                    <label class="checkbox-group">
                        <input type="checkbox" id="tafsirToggle">
                        <span>Show Tafsir</span>
                    </label>
                </div>

                <div class="settings-group">
                    <label class="checkbox-group">
                        <input type="checkbox" id="autoScrollToggle" checked>
                        <span>Auto-scroll with Audio</span>
                    </label>
                </div>

                <div class="settings-group">
                    <label class="settings-label">Translation Language</label>
                    <select id="translationLangSelect" class="settings-select">
                        <option value="en">English</option>
                        <option value="ur">Urdu</option>
                        <option value="hi">Hindi</option>
                    </select>
                </div>

                <div class="settings-group">
                    <label class="checkbox-group">
                        <input type="checkbox" id="autoPlayToggle">
                        <span>Auto-play Audio</span>
                    </label>
                </div>

                <div class="settings-group">
                    <label class="settings-label">Theme</label>
                    <select id="themeSelect" class="settings-select">
                        <option value="light">Light Mode</option>
                        <option value="dark">Dark Mode</option>
                        <option value="auto">Auto (System)</option>
                    </select>
                </div>

                <div class="settings-group">
                    <label class="settings-label">Audio Quality</label>
                    <select id="audioQualitySelect" class="settings-select">
                        <option value="high">High Quality</option>
                        <option value="medium">Medium Quality</option>
                        <option value="low">Low Quality</option>
                    </select>
                </div>
            </div>

            <!-- Memorization Tab -->
            <div class="tab-content" id="memorizationTab">
                <h2 style="margin-bottom: 16px;">Memorization Tool</h2>

                <div class="memorization-tool">
                    <div class="memorization-progress">
                        <div style="flex: 1;">
                            <div class="progress-label">Memorization Progress</div>
                            <div class="progress-bar-container">
                                <div class="progress-bar-fill" id="memorizationProgressBar" style="width: 0%"></div>
                            </div>
                            <div class="progress-text" id="memorizationProgressText">0/0 verses memorized</div>
                        </div>
                    </div>
                    <div class="memorization-actions">
                        <button class="action-btn" onclick="startMemorizationSession()">
                            <i class="fas fa-play"></i> Start Session
                        </button>
                        <button class="action-btn secondary" onclick="viewMemorizationPlan()">
                            <i class="fas fa-calendar"></i> View Plan
                        </button>
                    </div>
                </div>

                <div class="stats-container" style="margin-top: 16px;">
                    <div class="stat-card">
                        <div class="stat-number" id="memorizedVerses">0</div>
                        <div class="stat-label">Verses Memorized</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number" id="memorizationStreak">0</div>
                        <div class="stat-label">Day Streak</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number" id="lastSession">-</div>
                        <div class="stat-label">Last Session</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number" id="totalTime">0h</div>
                        <div class="stat-label">Total Time</div>
                    </div>
                </div>
            </div>

            <!-- Statistics Tab -->
            <div class="tab-content" id="statisticsTab">
                <h2 style="margin-bottom: 16px;">Reading Statistics</h2>

                <div class="stats-container">
                    <div class="stat-card">
                        <div class="stat-number" id="totalVersesRead">0</div>
                        <div class="stat-label">Verses Read</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number" id="surahsCompleted">0</div>
                        <div class="stat-label">Surahs Completed</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number" id="readingStreak">0</div>
                        <div class="stat-label">Day Streak</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number" id="totalTimeSpent">0h</div>
                        <div class="stat-label">Total Time</div>
                    </div>
                </div>

                <div class="progress-section">
                    <div class="progress-label">Overall Progress</div>
                    <div class="progress-bar-container">
                        <div class="progress-bar-fill" id="overallProgressBar" style="width: 0%"></div>
                    </div>
                    <div class="progress-text" id="overallProgressText">0% of Quran read</div>
                </div>

                <div class="progress-section">
                    <div class="progress-label">Last 7 Days Activity</div>
                    <div style="display: flex; gap: 4px; height: 40px; align-items: flex-end; margin-top: 12px;">
                        <div style="flex: 1; background: var(--primary); border-radius: 4px; height: 20%;"></div>
                        <div style="flex: 1; background: var(--primary); border-radius: 4px; height: 40%;"></div>
                        <div style="flex: 1; background: var(--primary); border-radius: 4px; height: 60%;"></div>
                        <div style="flex: 1; background: var(--primary); border-radius: 4px; height: 80%;"></div>
                        <div style="flex: 1; background: var(--primary); border-radius: 4px; height: 100%;"></div>
                        <div style="flex: 1; background: var(--primary); border-radius: 4px; height: 70%;"></div>
                        <div style="flex: 1; background: var(--primary); border-radius: 4px; height: 30%;"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bottom Navigation -->
        <div class="bottom-nav">
            <div class="nav-item active" data-tab="quranTab">
                <i class="fas fa-book-quran"></i>
                <span>Quran</span>
            </div>
            <div class="nav-item" data-tab="prayerTab">
                <i class="fas fa-clock"></i>
                <span>Prayer</span>
            </div>
            <div class="nav-item" data-tab="memorizationTab">
                <i class="fas fa-brain"></i>
                <span>Memorize</span>
            </div>
            <div class="nav-item" data-tab="statisticsTab">
                <i class="fas fa-chart-bar"></i>
                <span>Stats</span>
            </div>
            <div class="nav-item" data-tab="bookmarksTab">
                <i class="fas fa-bookmark"></i>
                <span>Bookmarks</span>
            </div>
            <div class="nav-item" data-tab="settingsTab">
                <i class="fas fa-cog"></i>
                <span>Settings</span>
            </div>
        </div>
    </div>

    <script>
        // ===== GLOBAL STATE =====
        const app = {
            surahs: [],
            currentSurah: null,
            verses: [],
            bookmarks: [],
            currentAudio: null,
            isPlaying: false,
            darkMode: localStorage.getItem('darkMode') === 'true',
            reciter: localStorage.getItem('reciter') || 'ar.alafasy',
            fontSize: parseInt(localStorage.getItem('fontSize') || '24'),
            showTranslation: localStorage.getItem('showTranslation') !== 'false',
            showTransliteration: localStorage.getItem('showTransliteration') !== 'false',
            showWordByWord: localStorage.getItem('showWordByWord') === 'true',
            showTafsir: localStorage.getItem('showTafsir') === 'true',
            autoScroll: localStorage.getItem('autoScroll') !== 'false',
            translationLang: localStorage.getItem('translationLang') || 'en',
            autoPlay: localStorage.getItem('autoPlay') === 'true',
            audioQuality: localStorage.getItem('audioQuality') || 'high',
            readingProgress: JSON.parse(localStorage.getItem('readingProgress') || '{}'),
            memorizationProgress: JSON.parse(localStorage.getItem('memorizationProgress') || '{}'),
            readingStats: JSON.parse(localStorage.getItem('readingStats') || '{}'),
            memorizationStats: JSON.parse(localStorage.getItem('memorizationStats') || '{}'),
            currentTab: 'quranTab',
            currentVerseIndex: 0,
            audioSyncInterval: null,
            searchMode: false,
            verseTimings: {} // Store verse timings for accurate scrolling
        };

        // ===== AUDIO URL MAPPING =====
        const audioUrlMap = {
            'ar.alafasy': 'https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/',
            'ar.abdulbasit': 'https://download.quranicaudio.com/quran/abdul_basit_murattal/',
            'ar.abdulsamad': 'https://download.quranicaudio.com/quran/abdurrahmaan_as-sudays/',
            'ar.husary': 'https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/',
            'ar.ghamdi': 'https://download.quranicaudio.com/quran/sa3ood_al-shuraym/',
            'ar.minshawi': 'https://download.quranicaudio.com/quran/muhammad_siddeeq_al-minshaawee/'
        };

        // ===== INITIALIZATION =====
        async function init() {
            updateCurrentTime();
            setInterval(updateCurrentTime, 60000); // Update time every minute

            loadBookmarks();
            loadReadingStats();
            loadMemorizationStats();
            applyTheme();
            await loadSurahs();
            setupEventListeners();
            setupTabNavigation();
            loadPrayerTimes();

            if (app.surahs.length > 0) {
                renderSurahList();
            }

            updateStatistics();
            updateMemorizationStats();
        }

        // ===== UPDATE CURRENT TIME =====
        function updateCurrentTime() {
            const now = new Date();
            const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            document.getElementById('currentTime').textContent = timeString;
        }

        // ===== LOAD SURAHS DATA =====
        async function loadSurahs() {
            try {
                app.surahs = getAllSurahs();
            } catch (error) {
                console.error('Error loading Surahs:', error);
                showToast('Error loading Surahs', 'error');
            }
        }

        // ===== GET ALL 114 SURAHS =====
        function getAllSurahs() {
            return [
                { number: 1, name: "Al-Fatiha", arabic: "الفاتحة", verses: 7, type: "Meccan" },
                { number: 2, name: "Al-Baqarah", arabic: "البقرة", verses: 286, type: "Medinan" },
                { number: 3, name: "Al-Imran", arabic: "آل عمران", verses: 200, type: "Medinan" },
                { number: 4, name: "An-Nisa", arabic: "النساء", verses: 176, type: "Medinan" },
                { number: 5, name: "Al-Maidah", arabic: "المائدة", verses: 120, type: "Medinan" },
                { number: 6, name: "Al-Anam", arabic: "الأنعام", verses: 165, type: "Meccan" },
                { number: 7, name: "Al-Araf", arabic: "الأعراف", verses: 206, type: "Meccan" },
                { number: 8, name: "Al-Anfal", arabic: "الأنفال", verses: 75, type: "Medinan" },
                { number: 9, name: "At-Taubah", arabic: "التوبة", verses: 129, type: "Medinan" },
                { number: 10, name: "Yunus", arabic: "يونس", verses: 109, type: "Meccan" },
                { number: 11, name: "Hud", arabic: "هود", verses: 123, type: "Meccan" },
                { number: 12, name: "Yusuf", arabic: "يوسف", verses: 111, type: "Meccan" },
                { number: 13, name: "Ar-Rad", arabic: "الرعد", verses: 43, type: "Medinan" },
                { number: 14, name: "Ibrahim", arabic: "إبراهيم", verses: 52, type: "Meccan" },
                { number: 15, name: "Al-Hijr", arabic: "الحجر", verses: 99, type: "Meccan" },
                { number: 16, name: "An-Nahl", arabic: "النحل", verses: 128, type: "Meccan" },
                { number: 17, name: "Al-Isra", arabic: "الإسراء", verses: 111, type: "Meccan" },
                { number: 18, name: "Al-Kahf", arabic: "الكهف", verses: 110, type: "Meccan" },
                { number: 19, name: "Maryam", arabic: "مريم", verses: 98, type: "Meccan" },
                { number: 20, name: "Ta-Ha", arabic: "طه", verses: 135, type: "Meccan" },
                { number: 21, name: "Al-Anbiya", arabic: "الأنبياء", verses: 112, type: "Meccan" },
                { number: 22, name: "Al-Hajj", arabic: "الحج", verses: 78, type: "Medinan" },
                { number: 23, name: "Al-Muminun", arabic: "المؤمنون", verses: 118, type: "Meccan" },
                { number: 24, name: "An-Nur", arabic: "النور", verses: 64, type: "Medinan" },
                { number: 25, name: "Al-Furqan", arabic: "الفرقان", verses: 77, type: "Meccan" },
                { number: 26, name: "Ash-Shuara", arabic: "الشعراء", verses: 227, type: "Meccan" },
                { number: 27, name: "An-Naml", arabic: "النمل", verses: 93, type: "Meccan" },
                { number: 28, name: "Al-Qasas", arabic: "القصص", verses: 88, type: "Meccan" },
                { number: 29, name: "Al-Ankabut", arabic: "العنكبوت", verses: 69, type: "Meccan" },
                { number: 30, name: "Ar-Rum", arabic: "الروم", verses: 60, type: "Meccan" },
                { number: 31, name: "Luqman", arabic: "لقمان", verses: 34, type: "Meccan" },
                { number: 32, name: "As-Sajdah", arabic: "السجدة", verses: 30, type: "Meccan" },
                { number: 33, name: "Al-Ahzab", arabic: "الأحزاب", verses: 73, type: "Medinan" },
                { number: 34, name: "Saba", arabic: "سبأ", verses: 54, type: "Meccan" },
                { number: 35, name: "Fatir", arabic: "فاطر", verses: 45, type: "Meccan" },
                { number: 36, name: "Ya-Sin", arabic: "يس", verses: 83, type: "Meccan" },
                { number: 37, name: "As-Saffat", arabic: "الصافات", verses: 182, type: "Meccan" },
                { number: 38, name: "Sad", arabic: "ص", verses: 88, type: "Meccan" },
                { number: 39, name: "Az-Zumar", arabic: "الزمر", verses: 75, type: "Meccan" },
                { number: 40, name: "Ghafir", arabic: "غافر", verses: 85, type: "Meccan" },
                { number: 41, name: "Fussilat", arabic: "فصلت", verses: 54, type: "Meccan" },
                { number: 42, name: "Ash-Shura", arabic: "الشورى", verses: 53, type: "Meccan" },
                { number: 43, name: "Az-Zukhruf", arabic: "الزخرف", verses: 89, type: "Meccan" },
                { number: 44, name: "Ad-Dukhan", arabic: "الدخان", verses: 59, type: "Meccan" },
                { number: 45, name: "Al-Jathiyah", arabic: "الجاثية", verses: 37, type: "Meccan" },
                { number: 46, name: "Al-Ahqaf", arabic: "الأحقاف", verses: 35, type: "Meccan" },
                { number: 47, name: "Muhammad", arabic: "محمد", verses: 38, type: "Medinan" },
                { number: 48, name: "Al-Fath", arabic: "الفتح", verses: 29, type: "Medinan" },
                { number: 49, name: "Al-Hujurat", arabic: "الحجرات", verses: 18, type: "Medinan" },
                { number: 50, name: "Qaf", arabic: "ق", verses: 45, type: "Meccan" },
                { number: 51, name: "Ad-Dhariyat", arabic: "الذاريات", verses: 60, type: "Meccan" },
                { number: 52, name: "At-Tur", arabic: "الطور", verses: 49, type: "Meccan" },
                { number: 53, name: "An-Najm", arabic: "النجم", verses: 62, type: "Meccan" },
                { number: 54, name: "Al-Qamar", arabic: "القمر", verses: 55, type: "Meccan" },
                { number: 55, name: "Ar-Rahman", arabic: "الرحمن", verses: 78, type: "Medinan" },
                { number: 56, name: "Al-Waqi'ah", arabic: "الواقعة", verses: 96, type: "Meccan" },
                { number: 57, name: "Al-Hadid", arabic: "الحديد", verses: 29, type: "Medinan" },
                { number: 58, name: "Al-Mujadilah", arabic: "المجادلة", verses: 22, type: "Medinan" },
                { number: 59, name: "Al-Hashr", arabic: "الحشر", verses: 24, type: "Medinan" },
                { number: 60, name: "Al-Mumtahanah", arabic: "الممتحنة", verses: 13, type: "Medinan" },
                { number: 61, name: "As-Saff", arabic: "الصف", verses: 14, type: "Medinan" },
                { number: 62, name: "Al-Jumu'ah", arabic: "الجمعة", verses: 11, type: "Medinan" },
                { number: 63, name: "Al-Munafiqun", arabic: "المنافقون", verses: 11, type: "Medinan" },
                { number: 64, name: "At-Taghabun", arabic: "التغابن", verses: 18, type: "Medinan" },
                { number: 65, name: "At-Talaq", arabic: "الطلاق", verses: 12, type: "Medinan" },
                { number: 66, name: "At-Tahrim", arabic: "التحريم", verses: 12, type: "Medinan" },
                { number: 67, name: "Al-Mulk", arabic: "الملك", verses: 30, type: "Meccan" },
                { number: 68, name: "Al-Qalam", arabic: "القلم", verses: 52, type: "Meccan" },
                { number: 69, name: "Al-Haqqah", arabic: "الحاقة", verses: 52, type: "Meccan" },
                { number: 70, name: "Al-Maarij", arabic: "المعارج", verses: 44, type: "Meccan" },
                { number: 71, name: "Nuh", arabic: "نوح", verses: 28, type: "Meccan" },
                { number: 72, name: "Al-Jinn", arabic: "الجن", verses: 28, type: "Meccan" },
                { number: 73, name: "Al-Muzzammil", arabic: "المزمل", verses: 20, type: "Meccan" },
                { number: 74, name: "Al-Muddathir", arabic: "المدثر", verses: 56, type: "Meccan" },
                { number: 75, name: "Al-Qiyamah", arabic: "القيامة", verses: 40, type: "Meccan" },
                { number: 76, name: "Al-Insan", arabic: "الإنسان", verses: 31, type: "Medinan" },
                { number: 77, name: "Al-Mursalat", arabic: "المرسلات", verses: 50, type: "Meccan" },
                { number: 78, name: "An-Naba", arabic: "النبأ", verses: 40, type: "Meccan" },
                { number: 79, name: "An-Naziat", arabic: "النازعات", verses: 46, type: "Meccan" },
                { number: 80, name: "Abasa", arabic: "عبس", verses: 42, type: "Meccan" },
                { number: 81, name: "At-Takwir", arabic: "التكوير", verses: 29, type: "Meccan" },
                { number: 82, name: "Al-Infitar", arabic: "الانفطار", verses: 19, type: "Meccan" },
                { number: 83, name: "Al-Mutaffifin", arabic: "المطففين", verses: 36, type: "Meccan" },
                { number: 84, name: "Al-Inshiqaq", arabic: "الانشقاق", verses: 25, type: "Meccan" },
                { number: 85, name: "Al-Buruj", arabic: "البروج", verses: 22, type: "Meccan" },
                { number: 86, name: "At-Tariq", arabic: "الطارق", verses: 17, type: "Meccan" },
                { number: 87, name: "Al-Ala", arabic: "الأعلى", verses: 19, type: "Meccan" },
                { number: 88, name: "Al-Ghashiyah", arabic: "الغاشية", verses: 26, type: "Meccan" },
                { number: 89, name: "Al-Fajr", arabic: "الفجر", verses: 30, type: "Meccan" },
                { number: 90, name: "Al-Balad", arabic: "البلد", verses: 20, type: "Meccan" },
                { number: 91, name: "Ash-Shams", arabic: "الشمس", verses: 15, type: "Meccan" },
                { number: 92, name: "Al-Lail", arabic: "الليل", verses: 21, type: "Meccan" },
                { number: 93, name: "Ad-Dhuha", arabic: "الضحى", verses: 11, type: "Meccan" },
                { number: 94, name: "Ash-Sharh", arabic: "الشرح", verses: 8, type: "Meccan" },
                { number: 95, name: "At-Tin", arabic: "التين", verses: 8, type: "Meccan" },
                { number: 96, name: "Al-Alaq", arabic: "العلق", verses: 19, type: "Meccan" },
                { number: 97, name: "Al-Qadr", arabic: "القدر", verses: 5, type: "Meccan" },
                { number: 98, name: "Al-Bayyinah", arabic: "البينة", verses: 8, type: "Medinan" },
                { number: 99, name: "Az-Zilzal", arabic: "الزلزلة", verses: 8, type: "Medinan" },
                { number: 100, name: "Al-Adiyat", arabic: "العاديات", verses: 11, type: "Meccan" },
                { number: 101, name: "Al-Qari'ah", arabic: "القارعة", verses: 11, type: "Meccan" },
                { number: 102, name: "At-Takathur", arabic: "التكاثر", verses: 8, type: "Meccan" },
                { number: 103, name: "Al-Asr", arabic: "العصر", verses: 3, type: "Meccan" },
                { number: 104, name: "Al-Humazah", arabic: "الهمزة", verses: 9, type: "Meccan" },
                { number: 105, name: "Al-Fil", arabic: "الفيل", verses: 5, type: "Meccan" },
                { number: 106, name: "Quraysh", arabic: "قريش", verses: 4, type: "Meccan" },
                { number: 107, name: "Al-Maun", arabic: "الماعون", verses: 7, type: "Meccan" },
                { number: 108, name: "Al-Kawthar", arabic: "الكوثر", verses: 3, type: "Meccan" },
                { number: 109, name: "Al-Kafirun", arabic: "الكافرون", verses: 6, type: "Meccan" },
                { number: 110, name: "An-Nasr", arabic: "النصر", verses: 3, type: "Medinan" },
                { number: 111, name: "Al-Lahab", arabic: "اللهب", verses: 5, type: "Meccan" },
                { number: 112, name: "Al-Ikhlas", arabic: "الإخلاص", verses: 4, type: "Meccan" },
                { number: 113, name: "Al-Falaq", arabic: "الفلق", verses: 5, type: "Meccan" },
                { number: 114, name: "An-Nas", arabic: "الناس", verses: 6, type: "Meccan" }
            ];
        }

        // ===== RENDER SURAH LIST =====
        function renderSurahList() {
            const surahList = document.getElementById('surahList');
            surahList.innerHTML = app.surahs.map(surah => `
                <div class="surah-item" onclick="loadSurah(${surah.number})">
                    <div class="surah-info">
                        <div class="surah-name">${surah.name}</div>
                        <div class="surah-verses">${surah.verses} verses • ${surah.type}</div>
                    </div>
                    <div class="surah-number">${surah.number}</div>
                </div>
            `).join('');
        }

        // ===== LOAD SURAH =====
        async function loadSurah(surahNumber) {
            try {
                const surah = app.surahs.find(s => s.number === surahNumber);
                if (!surah) return;

                app.currentSurah = surah;
                app.currentVerseIndex = 0;

                // Show loading state
                document.getElementById('versesPanel').innerHTML = '<div class="loading-spinner"><div class="spinner"></div></div>';

                // Update surah header
                document.getElementById('surahName').textContent = surah.name;
                document.getElementById('surahArabic').textContent = surah.arabic;
                document.getElementById('surahVerses').textContent = `${surah.verses} Verses`;
                document.getElementById('surahType').textContent = surah.type;
                document.getElementById('surahHeader').style.display = 'block';

                // Hide surah list, show verses
                document.getElementById('surahListContainer').style.display = 'none';
                document.getElementById('versesContainer').style.display = 'block';

                // Fetch verses from API
                const response = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/editions/quran-uthmani,en.asad`);
                const data = await response.json();

                if (data.code === 200) {
                    const arabicData = data.data.find(d => d.edition.identifier === 'quran-uthmani');
                    const translationData = data.data.find(d => d.edition.identifier === 'en.asad');

                    app.verses = arabicData.ayahs.map((ayah, index) => ({
                        number: ayah.numberInSurah,
                        text: ayah.text,
                        translation: translationData ? translationData.ayahs[index].text : '',
                        transliteration: getTransliteration(surah.number, ayah.numberInSurah)
                    }));

                    // Remove Bismillah from the beginning of surahs except Al-Fatiha and At-Taubah
                    if (surahNumber !== 1 && surahNumber !== 9) {
                        // Check if the first verse starts with Bismillah
                        if (app.verses[0].text.includes('بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ')) {
                            // Remove Bismillah from the first verse
                            app.verses[0].text = app.verses[0].text.replace('بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', '').trim();
                        }
                    }
                } else {
                    throw new Error('Failed to fetch verses');
                }

                renderVerses();
                renderWordByWord();
                renderTafsir();

                // Update reading progress
                updateReadingProgress(surah.number);
            } catch (error) {
                console.error('Error loading Surah:', error);
                showToast('Error loading Surah. Please try again.', 'error');

                // Fallback to mock data
                const surah = app.currentSurah;
                app.verses = Array.from({length: Math.min(surah.verses, 10)}, (_, i) => ({
                    number: i + 1,
                    text: getVerseText(surah.number, i + 1),
                    translation: `Translation of verse ${i + 1} from Surah ${surah.name}`,
                    transliteration: `Transliteration of verse ${i + 1} from Surah ${surah.name}`
                }));

                renderVerses();
                renderWordByWord();
                renderTafsir();
            }
        }

        // ===== GET VERSE TEXT (MOCK) =====
        function getVerseText(surahNumber, verseNumber) {
            if (surahNumber === 1) {
                // Al-Fatiha
                const verses = [
                    "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
                    "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
                    "الرَّحْمَٰنِ الرَّحِيمِ",
                    "مَالِكِ يَوْمِ الدِّينِ",
                    "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
                    "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
                    "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ"
                ];
                return verses[verseNumber - 1] || "Verse text";
            } else if (surahNumber === 114) {
                // An-Nas
                const verses = [
                    "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
                    "مَلِكِ النَّاسِ",
                    "إِلَٰهِ النَّاسِ",
                    "مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ",
                    "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ",
                    "مِنَ الْجِنَّةِ وَالنَّاسِ"
                ];
                return verses[verseNumber - 1] || "Verse text";
            } else {
                return "Verse text for Surah " + surahNumber + ":" + verseNumber;
            }
        }

        // ===== RENDER VERSES =====
        function renderVerses() {
            const versesPanel = document.getElementById('versesPanel');

            versesPanel.innerHTML = `
                <div class="verses-container">
                    ${app.verses.map((verse, index) => `
                        <div class="verse-card" id="verse-${verse.number}">
                            <div class="verse-header">
                                <div class="verse-number">${verse.number}</div>
                                <div class="verse-meta">${app.currentSurah.name} ${app.currentSurah.number}:${verse.number}</div>
                            </div>
                            <div class="verse-text" style="font-size: ${app.fontSize}px">${verse.text}</div>
                            ${app.showTranslation ? `<div class="verse-translation"><strong>Translation:</strong> ${verse.translation}</div>` : ''}
                            ${app.showTransliteration ? `<div class="verse-transliteration"><strong>Transliteration:</strong> ${verse.transliteration}</div>` : ''}
                            <div class="verse-actions">
                                <button class="verse-btn" onclick="playVerseAudio(${verse.number})">
                                    <i class="fas fa-play"></i> Play
                                </button>
                                <button class="verse-btn ${isBookmarked(app.currentSurah.number, verse.number) ? 'active' : ''}" onclick="toggleBookmark(${app.currentSurah.number}, ${verse.number})">
                                    <i class="fas fa-bookmark"></i> Bookmark
                                </button>
                                <button class="verse-btn" onclick="copyVerse(${verse.number})">
                                    <i class="fas fa-copy"></i> Copy
                                </button>
                                <button class="verse-btn" onclick="shareVerse(${verse.number})">
                                    <i class="fas fa-share"></i> Share
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        // ===== RENDER WORD BY WORD =====
        function renderWordByWord() {
            const wordByWordPanel = document.getElementById('wordByWordPanel');

            wordByWordPanel.innerHTML = `
                <div class="verses-container">
                    ${app.verses.map(verse => `
                        <div class="verse-card">
                            <div class="verse-header">
                                <div class="verse-number">${verse.number}</div>
                                <div class="verse-meta">${app.currentSurah.name} ${app.currentSurah.number}:${verse.number}</div>
                            </div>
                            <div class="word-by-word">
                                ${getWordByWordHTML(app.currentSurah.number, verse.number)}
                            </div>
                            <div class="verse-actions">
                                <button class="verse-btn" onclick="playVerseAudio(${verse.number})">
                                    <i class="fas fa-play"></i> Play
                                </button>
                                <button class="verse-btn ${isBookmarked(app.currentSurah.number, verse.number) ? 'active' : ''}" onclick="toggleBookmark(${app.currentSurah.number}, ${verse.number})">
                                    <i class="fas fa-bookmark"></i> Bookmark
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        // ===== RENDER TAFSIR =====
        function renderTafsir() {
            const tafsirPanel = document.getElementById('tafsirPanel');

            tafsirPanel.innerHTML = `
                <div class="verses-container">
                    ${app.verses.map(verse => `
                        <div class="verse-card">
                            <div class="verse-header">
                                <div class="verse-number">${verse.number}</div>
                                <div class="verse-meta">${app.currentSurah.name} ${app.currentSurah.number}:${verse.number}</div>
                            </div>
                            <div class="verse-text" style="font-size: ${app.fontSize}px">${verse.text}</div>
                            <div class="tafsir-section">
                                <div class="tafsir-title">Tafsir (Interpretation)</div>
                                <div>${getTafsir(app.currentSurah.number, verse.number)}</div>
                            </div>
                            <div class="verse-actions">
                                <button class="verse-btn" onclick="playVerseAudio(${verse.number})">
                                    <i class="fas fa-play"></i> Play
                                </button>
                                <button class="verse-btn ${isBookmarked(app.currentSurah.number, verse.number) ? 'active' : ''}" onclick="toggleBookmark(${app.currentSurah.number}, ${verse.number})">
                                    <i class="fas fa-bookmark"></i> Bookmark
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        // ===== WORD BY WORD HTML =====
        function getWordByWordHTML(surahNumber, verseNumber) {
            // Mock data for demonstration
            const wordData = {
                1: {
                    1: [
                        { arabic: "بِسْمِ", translation: "In the name" },
                        { arabic: "اللَّهِ", translation: "of Allah" },
                        { arabic: "الرَّحْمَٰنِ", translation: "the Entirely Merciful" },
                        { arabic: "الرَّحِيمِ", translation: "the Especially Merciful" }
                    ]
                },
                2: {
                    1: [
                        { arabic: "الم", translation: "Alif Lam Meem" }
                    ],
                    2: [
                        { arabic: "ذَٰلِكَ", translation: "That" },
                        { arabic: "الْكِتَابُ", translation: "the Book" },
                        { arabic: "لَا", translation: "no" },
                        { arabic: "رَيْبَ", translation: "doubt" },
                        { arabic: "فِيهِ", translation: "in it" }
                    ]
                }
            };

            const words = (wordData[surahNumber] && wordData[surahNumber][verseNumber]) || [
                { arabic: "بِسْمِ", translation: "In the name" },
                { arabic: "اللَّهِ", translation: "of Allah" },
                { arabic: "الرَّحْمَٰنِ", translation: "the Entirely Merciful" },
                { arabic: "الرَّحِيمِ", translation: "the Especially Merciful" }
            ];

            return words.map(word => `
                <div class="word-item">
                    <div class="word-arabic">${word.arabic}</div>
                    <div class="word-translation">${word.translation}</div>
                </div>
            `).join('');
        }

        // ===== TAFSIR =====
        function getTafsir(surahNumber, verseNumber) {
            const tafsirData = {
                1: {
                    1: "In the Name of Allah, the Most Gracious, the Most Merciful. This is the first verse of the Quran and is recited before every Surah except the ninth. It signifies that all actions should begin with the name of Allah, seeking His blessings and assistance.",
                    2: "All praise is due to Allah alone, the Sustainer of all the worlds. This verse teaches us that all praise belongs to Allah, who has created everything and sustains it."
                },
                2: {
                    1: "Alif-Lam-Mim. These are disjointed letters from the Arabic alphabet, and their meaning is known only to Allah. They appear at the beginning of several Surahs and serve as a reminder of the miraculous nature of the Quran.",
                    2: "This is the Book about which there is no doubt, a guidance for those conscious of Allah. This verse establishes the Quran as a source of guidance without any ambiguity or doubt."
                }
            };

            if (tafsirData[surahNumber] && tafsirData[surahNumber][verseNumber]) {
                return tafsirData[surahNumber][verseNumber];
            }

            return `Tafsir (interpretation) for this verse would provide deeper understanding of its meaning and context. In a full implementation, this would be fetched from a reliable Tafsir source.`;
        }

        // ===== GO BACK TO SURAH LIST =====
        function goBackToSurahList() {
            document.getElementById('surahHeader').style.display = 'none';
            document.getElementById('versesContainer').style.display = 'none';
            document.getElementById('surahListContainer').style.display = 'block';
            document.getElementById('audioPlayer').style.display = 'none';
            document.getElementById('audioPlayerNav').classList.remove('active');
            document.getElementById('searchContainer').style.display = 'none';
            app.searchMode = false;

            if (app.currentAudio) {
                app.currentAudio.pause();
                app.isPlaying = false;
                clearInterval(app.audioSyncInterval);
            }
        }

        // ===== AUDIO FUNCTIONS =====
        function playSurahAudio() {
            if (!app.currentSurah) return;

            const surahNumber = app.currentSurah.number.toString().padStart(3, '0');
            const baseUrl = audioUrlMap[app.reciter];

            if (!baseUrl) {
                showToast('Audio not available for selected reciter', 'error');
                return;
            }

            const audioUrl = `${baseUrl}${surahNumber}.mp3`;

            // Show audio player in navbar
            document.getElementById('audioPlayerNav').classList.add('active');
            document.getElementById('navPlayerTitle').textContent = `${app.currentSurah.name} - Full Surah`;
            document.getElementById('navPlayerReciter').textContent = `${getReciterName(app.reciter)}`;

            if (app.currentAudio) {
                app.currentAudio.pause();
                clearInterval(app.audioSyncInterval);
            }

            app.currentAudio = new Audio(audioUrl);
            setupAudioEvents();

            // Start auto-scroll synchronization
            startAudioSync();

            app.currentAudio.play().catch(error => {
                console.error('Error playing audio:', error);
                showToast('Error playing audio. Please try another reciter.', 'error');
            });
        }

        function playVerseAudio(verseNumber) {
            if (!app.currentSurah) return;

            const surahNumber = app.currentSurah.number.toString().padStart(3, '0');
            const verseNum = verseNumber.toString().padStart(3, '0');
            const baseUrl = audioUrlMap[app.reciter];

            if (!baseUrl) {
                showToast('Audio not available for selected reciter', 'error');
                return;
            }

            // For verse-by-verse audio
            const audioUrl = `${baseUrl}${surahNumber}${verseNum}.mp3`;

            // Show audio player in navbar
            document.getElementById('audioPlayerNav').classList.add('active');
            document.getElementById('navPlayerTitle').textContent = `${app.currentSurah.name} ${app.currentSurah.number}:${verseNumber}`;
            document.getElementById('navPlayerReciter').textContent = `${getReciterName(app.reciter)}`;

            if (app.currentAudio) {
                app.currentAudio.pause();
                clearInterval(app.audioSyncInterval);
            }

            app.currentAudio = new Audio(audioUrl);
            setupAudioEvents();

            // Highlight the current verse
            highlightCurrentVerse(verseNumber);

            app.currentAudio.play().catch(error => {
                console.error('Error playing verse audio:', error);
                showToast('Error playing audio', 'error');
            });
        }

        function setupAudioEvents() {
            if (!app.currentAudio) return;

            app.currentAudio.addEventListener('play', () => {
                document.getElementById('playIcon').className = 'fas fa-pause';
                document.getElementById('navPlayIcon').className = 'fas fa-pause';
                app.isPlaying = true;
            });

            app.currentAudio.addEventListener('pause', () => {
                document.getElementById('playIcon').className = 'fas fa-play';
                document.getElementById('navPlayIcon').className = 'fas fa-play';
                app.isPlaying = false;
            });

            app.currentAudio.addEventListener('timeupdate', updateProgress);
            app.currentAudio.addEventListener('loadedmetadata', updateDuration);
            app.currentAudio.addEventListener('ended', () => {
                document.getElementById('playIcon').className = 'fas fa-play';
                document.getElementById('navPlayIcon').className = 'fas fa-play';
                app.isPlaying = false;
                clearInterval(app.audioSyncInterval);
                document.getElementById('audioPlayerNav').classList.remove('active');
            });

            app.currentAudio.addEventListener('error', () => {
                showToast('Error loading audio. Please try another reciter or surah.', 'error');
                clearInterval(app.audioSyncInterval);
                document.getElementById('audioPlayerNav').classList.remove('active');
            });
        }

        function getReciterName(reciterCode) {
            const reciterNames = {
                'ar.alafasy': 'Mishary Rashid Alafasy',
                'ar.abdulbasit': 'Abdul Basit Abdul Samad',
                'ar.abdulsamad': 'Abdur-Rahman As-Sudais',
                'ar.husary': 'Mahmoud Khalil Al-Husary',
                'ar.ghamdi': 'Saad Al-Ghamdi',
                'ar.minshawi': 'Mohamed Siddiq Al-Minshawi'
            };
            return reciterNames[reciterCode] || reciterCode;
        }

        function toggleAudio() {
            if (!app.currentAudio) return;
            if (app.isPlaying) {
                app.currentAudio.pause();
                clearInterval(app.audioSyncInterval);
            } else {
                app.currentAudio.play();
                startAudioSync();
            }
        }

        function previousAudio() {
            if (app.currentAudio) {
                app.currentAudio.currentTime = Math.max(0, app.currentAudio.currentTime - 10);
            }
        }

        function nextAudio() {
            if (app.currentAudio) {
                app.currentAudio.currentTime = Math.min(app.currentAudio.duration, app.currentAudio.currentTime + 10);
            }
        }

        function seekAudio(event) {
            if (!app.currentAudio) return;
            const bar = event.currentTarget;
            const rect = bar.getBoundingClientRect();
            const percentage = (event.clientX - rect.left) / bar.offsetWidth;
            app.currentAudio.currentTime = percentage * app.currentAudio.duration;
        }

        function seekNavAudio(event) {
            if (!app.currentAudio) return;
            const bar = event.currentTarget;
            const rect = bar.getBoundingClientRect();
            const percentage = (event.clientX - rect.left) / bar.offsetWidth;
            app.currentAudio.currentTime = percentage * app.currentAudio.duration;
        }

        function updateProgress() {
            if (!app.currentAudio) return;
            const percentage = (app.currentAudio.currentTime / app.currentAudio.duration) * 100;
            document.getElementById('progressFill').style.width = percentage + '%';
            document.getElementById('navProgressFill').style.width = percentage + '%';
            document.getElementById('currentAudioTime').textContent = formatTime(app.currentAudio.currentTime);
            document.getElementById('navCurrentAudioTime').textContent = formatTime(app.currentAudio.currentTime);
        }

        function updateDuration() {
            if (!app.currentAudio) return;
            document.getElementById('duration').textContent = formatTime(app.currentAudio.duration);
            document.getElementById('navDuration').textContent = formatTime(app.currentAudio.duration);
        }

        function formatTime(seconds) {
            if (!seconds || isNaN(seconds)) return '0:00';
            const mins = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${mins}:${secs.toString().padStart(2, '0')}`;
        }

        // ===== IMPROVED AUDIO SYNC AND AUTO-SCROLL =====
        function startAudioSync() {
            if (!app.autoScroll) return;

            clearInterval(app.audioSyncInterval);

            app.audioSyncInterval = setInterval(() => {
                if (app.currentAudio && app.isPlaying) {
                    const currentTime = app.currentAudio.currentTime;

                    // Calculate which verse should be highlighted based on audio progress
                    // This is a simplified implementation - in a real app, you would have
                    // precise timing data for each verse
                    const verseIndex = calculateCurrentVerseIndex(currentTime);

                    if (verseIndex >= 0 && verseIndex < app.verses.length) {
                        highlightCurrentVerse(app.verses[verseIndex].number);
                    }
                }
            }, 100); // More frequent updates for better sync
        }

        function calculateCurrentVerseIndex(currentTime) {
            // This is a simplified calculation
            // In a real implementation, you would have precise timing data for each verse
            const duration = app.currentAudio.duration;
            if (!duration) return 0;

            const progress = currentTime / duration;
            const verseIndex = Math.floor(progress * app.verses.length);

            return verseIndex;
        }

        function highlightCurrentVerse(verseNumber) {
            // Remove active class from all verses
            document.querySelectorAll('.verse-card').forEach(card => {
                card.classList.remove('active');
            });

            // Add active class to current verse
            const currentVerse = document.getElementById(`verse-${verseNumber}`);
            if (currentVerse) {
                currentVerse.classList.add('active');

                // Scroll to the verse if auto-scroll is enabled
                if (app.autoScroll) {
                    currentVerse.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        }

        // ===== BOOKMARK FUNCTIONS =====
        function toggleBookmark(surahNumber, verseNumber) {
            const key = `${surahNumber}:${verseNumber}`;
            const index = app.bookmarks.findIndex(b => b.key === key);
            if (index > -1) {
                app.bookmarks.splice(index, 1);
                showToast('Bookmark removed', 'info');
            } else {
                app.bookmarks.push({
                    key,
                    surahNumber,
                    verseNumber,
                    surahName: app.currentSurah.name,
                    date: new Date().toLocaleDateString()
                });
                showToast('Verse bookmarked!', 'success');
            }
            saveBookmarks();
            renderBookmarks();

            // Update the bookmark button state
            if (app.currentSurah && app.currentSurah.number === surahNumber) {
                renderVerses();
            }
        }

        function isBookmarked(surahNumber, verseNumber) {
            return app.bookmarks.some(b => b.surahNumber === surahNumber && b.verseNumber === verseNumber);
        }

        function saveBookmarks() {
            localStorage.setItem('bookmarks', JSON.stringify(app.bookmarks));
        }

        function loadBookmarks() {
            const saved = localStorage.getItem('bookmarks');
            app.bookmarks = saved ? JSON.parse(saved) : [];
        }

        function renderBookmarks() {
            const bookmarksList = document.getElementById('bookmarksList');
            if (app.bookmarks.length === 0) {
                bookmarksList.innerHTML = '<div class="empty-state"><i class="fas fa-bookmark"></i><p>No bookmarks yet</p></div>';
                return;
            }
            bookmarksList.innerHTML = app.bookmarks.map(bookmark => `
                <div class="bookmark-item" onclick="loadBookmark(${bookmark.surahNumber}, ${bookmark.verseNumber})">
                    <div class="bookmark-text">
                        <strong>${bookmark.surahName} ${bookmark.surahNumber}:${bookmark.verseNumber}</strong>
                        <div style="font-size: 12px; color: var(--text-light-alt);">${bookmark.date}</div>
                    </div>
                    <button class="bookmark-remove" onclick="event.stopPropagation(); removeBookmark('${bookmark.key}')">Remove</button>
                </div>
            `).join('');
        }

        function loadBookmark(surahNumber, verseNumber) {
            loadSurah(surahNumber);
            // Scroll to the bookmarked verse
            setTimeout(() => {
                const verseElement = document.getElementById(`verse-${verseNumber}`);
                if (verseElement) {
                    verseElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    highlightCurrentVerse(verseNumber);
                }
            }, 500);
        }

        function removeBookmark(key) {
            app.bookmarks = app.bookmarks.filter(b => b.key !== key);
            saveBookmarks();
            renderBookmarks();
            showToast('Bookmark removed', 'info');
        }

        // ===== PRAYER TIMES =====
        function loadPrayerTimes() {
            // Mock prayer times for demonstration
            const prayerTimes = {
                Fajr: "05:15",
                Sunrise: "06:45",
                Dhuhr: "12:30",
                Asr: "15:45",
                Maghrib: "18:15",
                Isha: "19:45"
            };

            const now = new Date();
            const currentTime = now.getHours() * 60 + now.getMinutes();
            let nextPrayer = null;
            let nextPrayerTime = null;

            const prayerTimesContainer = document.getElementById('prayerTimesContainer');

            if (prayerTimesContainer) {
                prayerTimesContainer.innerHTML = Object.entries(prayerTimes).map(([prayer, time]) => {
                    const [hours, minutes] = time.split(':').map(Number);
                    const prayerTime = hours * 60 + minutes;
                    const isActive = prayerTime <= currentTime && 
                                    (nextPrayer === null || prayerTime > (nextPrayerTime || 0));

                    if (isActive) {
                        nextPrayer = prayer;
                        nextPrayerTime = prayerTime;
                    }

                    return `
                        <div class="prayer-time-card ${isActive ? 'active' : ''}">
                            <div class="prayer-name">${prayer}</div>
                            <div class="prayer-time">${time}</div>
                        </div>
                    `;
                }).join('');
            }

            // Mock Qibla direction
            document.getElementById('qiblaAngle').textContent = "45° from North";
            document.getElementById('qiblaNeedle').style.transform = "translate(-50%, -50%) rotate(45deg)";
        }

        // ===== TRANSLITERATION =====
        function getTransliteration(surahNumber, verseNumber) {
            const commonTransliterations = {
                1: {
                    1: "Bismillāhir-Raĥmānir-Raĥīm",
                    2: "Al-Ĥamdu Lillāhi Rabbi Al-`Ālamīn",
                    3: "Ar-Raĥmāni Ar-Raĥīm",
                    4: "Māliki Yawmi Ad-Dīn",
                    5: "Īyāka Na`budu Wa Īyāka Nasta`īn",
                    6: "Ahdinā Aş-Şirāţa Al-Mustaqīm",
                    7: "Şirāţa Al-Ladhīna An`amta `Alayhim Ghayri Al-Maghđūbi `Alayhim Wa Lā Ađ-Đāllīn"
                },
                2: {
                    1: "Alif-Lām-Mīm",
                    2: "Dhālika Al-Kitābu Lā Rayba Fīhi Hudan Lilmuttaqīna",
                    3: "Al-Ladhīna Yu'uminūna Bil-Ghaybi Wa Yuqīmūna Aş-Şalāata Wa Mimmā Razaqnāhum Yunfiqūna"
                }
            };

            if (commonTransliterations[surahNumber] && commonTransliterations[surahNumber][verseNumber]) {
                return commonTransliterations[surahNumber][verseNumber];
            }

            return `Transliteration of verse ${verseNumber} from Surah ${surahNumber}`;
        }

        // ===== COPY VERSE =====
        function copyVerse(verseNumber) {
            const verse = app.verses.find(v => v.number === verseNumber);
            if (!verse) return;
            const text = `${verse.text}\n\n${app.currentSurah.name} (${app.currentSurah.number}:${verseNumber})\n\nTranslation: ${verse.translation}`;
            navigator.clipboard.writeText(text).then(() => {
                showToast('Verse copied!', 'success');
            }).catch(() => {
                showToast('Failed to copy', 'error');
            });
        }

        // ===== SHARE VERSE =====
        function shareVerse(verseNumber) {
            const verse = app.verses.find(v => v.number === verseNumber);
            if (!verse) return;
            const text = `${verse.text}\n\n${app.currentSurah.name} (${app.currentSurah.number}:${verseNumber})`;
            if (navigator.share) {
                navigator.share({
                    title: 'Quran Verse',
                    text: text
                }).catch(error => console.log('Share cancelled:', error));
            } else {
                showToast('Share not supported on this device', 'info');
            }
        }

        // ===== SEARCH FUNCTIONALITY =====
        function setupSearch() {
            const searchInput = document.getElementById('searchInput');
            const searchResults = document.getElementById('searchResults');

            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase().trim();
                if (query.length === 0) {
                    searchResults.innerHTML = '';
                    return;
                }

                // Search in surah names and numbers
                const surahResults = app.surahs.filter(s =>
                    s.name.toLowerCase().includes(query) ||
                    s.arabic.includes(query) ||
                    s.number.toString().includes(query)
                );

                if (surahResults.length === 0) {
                    searchResults.innerHTML = '<div class="empty-state"><i class="fas fa-search"></i><p>No results found</p></div>';
                    return;
                }

                searchResults.innerHTML = surahResults.map(surah => `
                    <div class="surah-item" onclick="loadSurah(${surah.number}); document.getElementById('searchContainer').style.display='none'; app.searchMode=false;">
                        <div class="surah-info">
                            <div class="surah-name">${surah.name}</div>
                            <div class="surah-verses">${surah.arabic} - ${surah.verses} verses</div>
                        </div>
                        <div class="surah-number">${surah.number}</div>
                    </div>
                `).join('');
            });
        }

        function toggleSearch() {
            app.searchMode = !app.searchMode;
            const searchContainer = document.getElementById('searchContainer');

            if (app.searchMode) {
                searchContainer.style.display = 'block';
                document.getElementById('surahListContainer').style.display = 'none';
                document.getElementById('searchInput').focus();
            } else {
                searchContainer.style.display = 'none';
                document.getElementById('surahListContainer').style.display = 'block';
                document.getElementById('searchInput').value = '';
                document.getElementById('searchResults').innerHTML = '';
            }
        }

        // ===== TAB NAVIGATION =====
        function setupTabNavigation() {
            const navItems = document.querySelectorAll('.nav-item');

            navItems.forEach(item => {
                item.addEventListener('click', () => {
                    // Remove active class from all items
                    navItems.forEach(navItem => navItem.classList.remove('active'));

                    // Add active class to clicked item
                    item.classList.add('active');

                    // Hide all tab contents
                    document.querySelectorAll('.tab-content').forEach(tab => {
                        tab.classList.remove('active');
                    });

                    // Show selected tab content
                    const tabId = item.getAttribute('data-tab');
                    document.getElementById(tabId).classList.add('active');
                    app.currentTab = tabId;

                    // Load tab-specific content
                    if (tabId === 'bookmarksTab') {
                        renderBookmarks();
                    } else if (tabId === 'prayerTab') {
                        loadPrayerTimes();
                    } else if (tabId === 'statisticsTab') {
                        updateStatistics();
                    } else if (tabId === 'memorizationTab') {
                        updateMemorizationStats();
                    }
                });
            });

            // Setup verse display tabs
            const verseTabs = document.querySelectorAll('#versesContainer .tab');
            verseTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    // Remove active class from all tabs
                    verseTabs.forEach(t => t.classList.remove('active'));

                    // Add active class to clicked tab
                    tab.classList.add('active');

                    // Hide all tab panels
                    document.querySelectorAll('#versesContainer .tab-content-panel').forEach(panel => {
                        panel.classList.remove('active');
                    });

                    // Show selected panel
                    const panelId = tab.getAttribute('data-tab') + 'Panel';
                    document.getElementById(panelId).classList.add('active');
                });
            });
        }

        // ===== READING PROGRESS =====
        function updateReadingProgress(surahNumber) {
            if (!app.readingProgress[surahNumber]) {
                app.readingProgress[surahNumber] = 0;
            }

            // Increment progress (in a real app, this would be based on actual reading)
            app.readingProgress[surahNumber] = Math.min(
                app.readingProgress[surahNumber] + 1, 
                app.currentSurah.verses
            );

            localStorage.setItem('readingProgress', JSON.stringify(app.readingProgress));

            // Update reading stats
            updateReadingStats();
        }

        function loadReadingStats() {
            const saved = localStorage.getItem('readingStats');
            if (saved) {
                app.readingStats = JSON.parse(saved);
            } else {
                app.readingStats = {
                    totalVersesRead: 0,
                    surahsCompleted: 0,
                    readingStreak: 0,
                    totalTimeSpent: 0,
                    lastRead: new Date().toISOString().split('T')[0]
                };
            }
        }

        function updateReadingStats() {
            // Calculate total verses read
            app.readingStats.totalVersesRead = Object.values(app.readingProgress).reduce((a, b) => a + b, 0);

            // Calculate completed surahs
            app.readingStats.surahsCompleted = app.surahs.filter(s => 
                app.readingProgress[s.number] >= s.verses
            ).length;

            // Update streak (simplified)
            const today = new Date().toISOString().split('T')[0];
            if (app.readingStats.lastRead !== today) {
                app.readingStats.readingStreak++;
                app.readingStats.lastRead = today;
            }

            // Save to localStorage
            localStorage.setItem('readingStats', JSON.stringify(app.readingStats));

            // Update UI
            updateStatistics();
        }

        function updateStatistics() {
            document.getElementById('totalVersesRead').textContent = app.readingStats.totalVersesRead;
            document.getElementById('surahsCompleted').textContent = app.readingStats.surahsCompleted;
            document.getElementById('readingStreak').textContent = app.readingStats.readingStreak;
            document.getElementById('totalTimeSpent').textContent = Math.floor(app.readingStats.totalTimeSpent / 60) + 'h';

            // Calculate overall progress
            const totalVerses = 6236; // Total verses in Quran
            const progressPercent = Math.round((app.readingStats.totalVersesRead / totalVerses) * 100);
            document.getElementById('overallProgressBar').style.width = progressPercent + '%';
            document.getElementById('overallProgressText').textContent = progressPercent + '% of Quran read';
        }

        // ===== MEMORIZATION TOOLS =====
        function loadMemorizationStats() {
            const saved = localStorage.getItem('memorizationStats');
            if (saved) {
                app.memorizationStats = JSON.parse(saved);
            } else {
                app.memorizationStats = {
                    memorizedVerses: 0,
                    memorizationStreak: 0,
                    lastSession: null,
                    totalTime: 0
                };
            }
        }

        function updateMemorizationStats() {
            document.getElementById('memorizedVerses').textContent = app.memorizationStats.memorizedVerses;
            document.getElementById('memorizationStreak').textContent = app.memorizationStats.memorizationStreak;
            document.getElementById('lastSession').textContent = app.memorizationStats.lastSession || '-';
            document.getElementById('totalTime').textContent = Math.floor(app.memorizationStats.totalTime / 60) + 'h';

            // Update progress bar
            const progressPercent = Math.round((app.memorizationStats.memorizedVerses / 6236) * 100);
            document.getElementById('memorizationProgressBar').style.width = progressPercent + '%';
            document.getElementById('memorizationProgressText').textContent = 
                `${app.memorizationStats.memorizedVerses}/6236 verses memorized`;
        }

        function startMemorizationSession() {
            showToast('Memorization session started!', 'success');
            // In a real implementation, this would start an interactive session
        }

        function viewMemorizationPlan() {
            showToast('Opening memorization plan...', 'info');
        }

        // ===== THEME FUNCTIONS =====
        function toggleTheme() {
            app.darkMode = !app.darkMode;
            localStorage.setItem('darkMode', app.darkMode);
            applyTheme();
            showToast(app.darkMode ? 'Dark mode enabled' : 'Light mode enabled', 'info');
        }

        function applyTheme() {
            if (app.darkMode) {
                document.body.classList.add('dark-mode');
                document.getElementById('themeBtn').innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                document.body.classList.remove('dark-mode');
                document.getElementById('themeBtn').innerHTML = '<i class="fas fa-moon"></i>';
            }
        }

        // ===== TOAST NOTIFICATIONS =====
        function showToast(message, type = 'info') {
            const toast = document.createElement('div');
            toast.className = `toast ${type}`;

            const iconMap = {
                'success': 'fa-check-circle',
                'error': 'fa-exclamation-circle',
                'info': 'fa-info-circle',
                'warning': 'fa-exclamation-triangle'
            };

            toast.innerHTML = `
                <i class="fas ${iconMap[type]} toast-icon"></i>
                <span>${message}</span>
            `;

            document.body.appendChild(toast);

            setTimeout(() => {
                toast.style.animation = 'slideUp 0.3s ease reverse';
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }

        // ===== EVENT LISTENERS =====
        function setupEventListeners() {
            document.getElementById('searchBtn').addEventListener('click', toggleSearch);
            document.getElementById('themeBtn').addEventListener('click', toggleTheme);

            // Settings
            document.getElementById('reciterSelect').addEventListener('change', (e) => {
                app.reciter = e.target.value;
                localStorage.setItem('reciter', app.reciter);
                showToast(`Reciter changed to ${e.target.options[e.target.selectedIndex].text}`, 'info');
            });

            document.getElementById('fontSizeSlider').addEventListener('input', (e) => {
                app.fontSize = parseInt(e.target.value);
                document.getElementById('fontSizeValue').textContent = app.fontSize + 'px';
                localStorage.setItem('fontSize', app.fontSize);
                if (app.currentSurah) {
                    const verseTexts = document.querySelectorAll('.verse-text');
                    verseTexts.forEach(text => {
                        text.style.fontSize = app.fontSize + 'px';
                    });
                }
            });

            document.getElementById('translationToggle').addEventListener('change', (e) => {
                app.showTranslation = e.target.checked;
                localStorage.setItem('showTranslation', app.showTranslation);
                if (app.currentSurah) {
                    renderVerses();
                }
            });

            document.getElementById('transliterationToggle').addEventListener('change', (e) => {
                app.showTransliteration = e.target.checked;
                localStorage.setItem('showTransliteration', app.showTransliteration);
                if (app.currentSurah) {
                    renderVerses();
                }
            });

            document.getElementById('wordByWordToggle').addEventListener('change', (e) => {
                app.showWordByWord = e.target.checked;
                localStorage.setItem('showWordByWord', app.showWordByWord);
            });

            document.getElementById('tafsirToggle').addEventListener('change', (e) => {
                app.showTafsir = e.target.checked;
                localStorage.setItem('showTafsir', app.showTafsir);
            });

            document.getElementById('autoScrollToggle').addEventListener('change', (e) => {
                app.autoScroll = e.target.checked;
                localStorage.setItem('autoScroll', app.autoScroll);
            });

            document.getElementById('translationLangSelect').addEventListener('change', (e) => {
                app.translationLang = e.target.value;
                localStorage.setItem('translationLang', app.translationLang);
                showToast('Translation language changed', 'info');
            });

            document.getElementById('autoPlayToggle').addEventListener('change', (e) => {
                app.autoPlay = e.target.checked;
                localStorage.setItem('autoPlay', app.autoPlay);
                showToast(app.autoPlay ? 'Auto-play enabled' : 'Auto-play disabled', 'info');
            });

            document.getElementById('themeSelect').addEventListener('change', (e) => {
                app.darkMode = e.target.value === 'dark';
                localStorage.setItem('darkMode', app.darkMode);
                applyTheme();
            });

            document.getElementById('audioQualitySelect').addEventListener('change', (e) => {
                app.audioQuality = e.target.value;
                localStorage.setItem('audioQuality', app.audioQuality);
            });

            // Setup search
            setupSearch();
        }

        // ===== INITIALIZE APP =====
        window.addEventListener('DOMContentLoaded', init);
    </script>
<script src="update.js" defer></script>
</body>
</html>