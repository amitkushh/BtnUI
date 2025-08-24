# BtnUI

<img width="1185" height="698" alt="btnui1" src="https://github.com/user-attachments/assets/2edd8e62-890a-4329-ac00-438290ec9666" />
<img width="1198" height="718" alt="btnui2" src="https://github.com/user-attachments/assets/e20be211-5214-4061-b72b-df5c2c1a2106" />
<img width="1177" height="822" alt="btnui3" src="https://github.com/user-attachments/assets/87f84cce-9d52-45ae-8e47-7647f4f766d0" />

A minimal collection of Tailwind-powered buttons ready to use in your next project. Copy, customize, and use them instantly.

👉 [Live Demo](https://www.btnui.xyz)

---

## Table of Contents

1. [Introduction](#introduction)  
2. [Tech Stack](#tech-stack)  
3. [Features](#features)  
4. [Prerequisites](#prerequisites)  
5. [Installation](#installation)  
6. [Usage](#usage)

---

## Introduction

**BtnUI** is a powerful UI library that provides a collection of ready-to-use buttons built with Tailwind CSS. The buttons can be easily copied, customized, and integrated into your own projects.

---

## Tech Stack

| Technology   | Details                               |
|--------------|---------------------------------------|
| Framework    | Next.js (bootstrapped via `create-next-app`) |
| Styling      | Tailwind CSS                          |
| Font         | Inter (optimized using `next/font`)   |
| Languages    | TypeScript           |

---

## Features

- Pre-built buttons with Tailwind CSS  
- Copy-paste ready code snippets    
- Lightweight, fast, and developer-friendly  
- Licensed under MIT  

---

## Prerequisites

Make sure you have the following installed:

- **Node.js** (>= 18 recommended)  
- **npm**, **yarn**, **pnpm**, or **bun**  
- **Git** (optional, but recommended)

---

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/amitkushh/BtnUI.git
cd BtnUI
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

```tsx
export default function Example() {
  return (
    <button className="relative px-8 py-3 overflow-hidden font-semibold bg-black group border-2 border-black rounded-xl cursor-pointer text-white">
      <span className="absolute inset-0 w-full h-full bg-white transform scale-x-0 origin-left rounded-tr-full rounded-br-full group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-800 ease-in-out z-0"></span>
      <span className="absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-right rounded-tl-full group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-800 ease-in-out z-0"></span>
      <span className="relative z-10 text-white transition-colors duration-800">
        Login
      </span>
    </button>
  );
}
```

(Adjust the path and component name according to your project structure.)

## Customization

1.Modify Tailwind classes to change colors, spacing, and hover effects.

