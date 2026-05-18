import http.server, socketserver, os

os.chdir(os.path.dirname(os.path.abspath(__file__)))

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        super().end_headers()

with socketserver.TCPServer(('0.0.0.0', 8001), Handler) as httpd:
    print('Pulse Runner serveres på port 8001')
    httpd.serve_forever()
