# Discord Ticket System

Welcome to the Discord Ticket System! This project is designed to help you manage support tickets on your Discord server efficiently.

## Features

- Create and manage tickets with ease
- Customizable ticket categories
- Automatic ticket closure after a period of inactivity
- Role-based access control for ticket management
- Easy-to-use commands for creating, viewing, and closing tickets

## Installation

To get started, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/Ridh21/discord-ticketsystem.git
    ```

2. Navigate to the project directory:
    ```bash
    cd discord-ticketsystem
    ```

3. Install the required dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file and add your Discord bot token and other necessary configurations:
    ```plaintext
    DISCORD_TOKEN=your-discord-bot-token
    PREFIX=!
    ```

5. Start the bot:
    ```bash
    npm start
    ```

## Usage

### Commands

- **Create Ticket**
    ```plaintext
    !ticket create [category] [description]
    ```
    Create a new ticket in the specified category with a brief description.

- **View Tickets**
    ```plaintext
    !ticket view
    ```
    View all open tickets.

- **Close Ticket**
    ```plaintext
    !ticket close [ticket ID]
    ```
    Close the specified ticket.

### Configuration

You can customize the bot's behavior by editing the configuration file. This includes setting ticket categories, inactivity timeout periods, and role permissions.

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, feel free to open an issue or contact me directly at [ridh21](https://github.com/Ridh21).

---

Thank you for using the Discord Ticket System!