# TCP

- Transmission Control Protocol
  - Standard that defines how to connect with other computers/applications
    - To exchange data
  - Uses IP (Internet Protocol)
    - The way the internet works is a combination of TCP and IP
- HTTP (Hyper Text Transfer Protocol), layer on top of a TCP connection

## The TCP connection

- A host says that things can connect to an address and port
- A client reaches out to that address and port then makes that connection
- It uses events to facilitate the connection process
- It sends data back and forth using streams
  - Streams are just small string based data packets passed between host and client/s
  - A TCP connection quarantees that data will transfer between two appilcations in the order that they were sent
