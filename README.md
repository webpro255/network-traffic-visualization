# network-traffic-visualization
A comprehensive D3.js visualization tool for analyzing and diagnosing network traffic from pcapng files. Features include zoom, pan, protocol-specific coloring, anomaly detection, and more.

## Overview

This project is a powerful and interactive network traffic visualization tool built using D3.js. It is designed to help network engineers, cybersecurity professionals, and researchers analyze and diagnose network traffic from pcapng files. The tool offers a variety of features to enhance data analysis, including zoom and pan capabilities, protocol-specific coloring, anomaly detection, and more.

## Features

- **Zoom and Pan**: Intuitive zooming and panning for better data navigation.
- **Protocol-Specific Coloring**: Differentiate network traffic by protocol (TCP, UDP, ICMP) using color coding.
- **Tooltips**: Hover over nodes to display IP addresses and other relevant information.
- **Highlighting**: Highlight nodes and their connected links on hover to trace connections easily.
- **Packet Size Representation**: Visualize packet sizes with varying link thickness.
- **Anomaly Detection**: Automatic detection and highlighting of anomalous network behavior based on packet size.
- **Customizable Views**: Filter traffic by subnet, protocol, or view all data to focus on specific network segments.
- **Legend**: Color-coded legend for easy identification of protocols.
- **Save/Export Functionality**: Save the visualization as an SVG image or export the data as a JSON file.
- **IP Geolocation Integration (Planned)**: Integration with an IP geolocation API to map IP addresses to geographic locations.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Python (v3.6 or higher)
- `pyshark` Python library
- `tshark` (part of the Wireshark package)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/network-traffic-visualization.git
   cd network-traffic-visualization

2. **npm install**:   
   ```bash
   npm install

3. **Install Python dependencies**:
   ```bash
   Install Python dependencies

Ensure tshark is installed:
   On Ubuntu/Debian: sudo apt-get install tshark
   On macOS (with Homebrew): brew install wireshark

### Running the Project

1. **Start the Node.js server**:
   ```bash
   node app.js

2. **Open your web browser**:
   Open your web browser:
   Navigate to http://localhost:3000 to access the visualization tool.

3. **Upload a pcapng file**:
   Use the web interface to upload a pcapng file and explore the network traffic visualization.

### Usage

- **Zoom and Pan**: Use your mouse wheel to zoom in and out, and click and drag to pan the view.
- **Highlight Connections**: Hover over a node to highlight its connections and display IP address details in a tooltip.
- **Filter Traffic**: Use the dropdown menu to filter traffic by protocol or subnet.
- **Save Visualization**: Click the "Save as Image" button to download the visualization as an SVG file.
- **Export Data**: Click the "Save as JSON" button to export the network data in JSON format.

### Planned Features

- **IP Geolocation Integration**: Display geographic information about IP addresses using an IP geolocation API.
- **Flow Analysis**: Implement Sankey diagrams to visualize data flow between IP addresses.
- **Real-Time Monitoring**: Add real-time traffic monitoring and visualization capabilities.

### Screenshots



### Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to create a pull request or open an issue.

### License

This project is licensed under the MIT License - see the LICENSE file for details.

### Connect with Me

[LinkedIn](https://www.linkedin.com/in/davidgrice-cybersecurity/)

