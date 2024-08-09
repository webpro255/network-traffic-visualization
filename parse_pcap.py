"""
This Python script parses a pcapng file using the PyShark library to extract
network traffic data. The extracted data includes source IP, destination IP, 
protocol, packet size, and timestamp. The data is then outputted as a JSON 
object, which is used by the Node.js server to visualize the network traffic.

- PyShark: A Python wrapper for the TShark network protocol analyzer that allows 
  parsing of packet capture files (like pcapng).
- Input: The file path of a pcapng file.
- Output: A JSON array where each object contains details about a network packet 
  (source IP, destination IP, protocol, size, timestamp).
"""

import sys
import json
import pyshark

def parse_pcap(file_path):
    cap = pyshark.FileCapture(file_path)
    connections = []

    for packet in cap:
        try:
            src_ip = packet.ip.src
            dst_ip = packet.ip.dst
            protocol = packet.transport_layer
            size = packet.length
            connections.append({
                "src": src_ip,
                "dst": dst_ip,
                "protocol": protocol,
                "size": size,
                "timestamp": packet.sniff_time.isoformat()
            })
        except AttributeError:
            # Skip packets that don't have IP layer or are malformed
            continue

    return connections

def main(file_path):
    connections = parse_pcap(file_path)
    print(json.dumps(connections))

if __name__ == "__main__":
    main(sys.argv[1])
