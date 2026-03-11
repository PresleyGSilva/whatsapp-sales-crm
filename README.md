# Minimalist WhatsApp CRM

A streamlined Customer Relationship Management (CRM) system designed specifically for WhatsApp-driven sales teams. It leverages WebSockets for real-time communication and integrates directly with WhatsApp.

## Features

- **WhatsApp Integration**: Connect via QR code using `whatsapp-web.js`.
- **Real-Time Updates**: Instant message synchronization using `Socket.io`.
- **Minimalist UI**: Focus solely on core sales operations and lead tracking.
- **RESTful API**: Manage contacts, messages, and sales funnels.

## Tech Stack

- Node.js & Express
- WebSockets (Socket.io)
- whatsapp-web.js
- React (Frontend Architecture Ready)

## Setup Instructions

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the development environment: `npm run dev`
4. Scan the QR code printed in the terminal to connect the WhatsApp session.

## Architecture

This project emphasizes real-time data flow. The Node.js server acts as an intermediary between the WhatsApp Web client architecture and your custom frontend dashboard, pushing events seamlessly through WebSockets.
