import CodeBlock from "@/components/CodeBlocks";
export default function NodeEnvironment() {
  return (
    <main className="wrapper">
      <section>
        <p className="text-xl font-bold">
          Here is a step-by-step guide to set up a VPS for a Node.js application
          with Node.js, Git, Nginx, PM2, and firewall configuration. I’ll assume
          you’re using an Ubuntu VPS (common for hosting).
        </p>
        <div className="mt-8">
          <h5 className="font-bold text-blue-500 capitalize">
            1. Connect to VPS from terminal
          </h5>
          <CodeBlock
            title="command:"
            language="javascript"
          >{`ssh root@YOUR_SERVER_IP`}</CodeBlock>
          <p className="text-xs mt-4 ml-2">
            Replace YOUR_SERVER_IP with your VPS IP.
          </p>
        </div>
        <div className="mt-10">
          <h5 className="font-bold text-blue-500 capitalize">
            2. Update the ubuntu vps system
          </h5>
          <CodeBlock
            title="command:"
            language="javascript"
          >{`sudo apt update && sudo apt upgrade -y
`}</CodeBlock>
        </div>
        <div className="mt-10">
          <h5 className="font-bold text-blue-500 capitalize">
            3. Install NVM (Node Version Manager)
          </h5>
          <CodeBlock
            title="command:"
            language="javascript"
          >{`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.6/install.sh | bash

`}</CodeBlock>
          <CodeBlock
            title="Load NVM into the current shell:"
            language="javascript"
          >
            {
              'export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")" [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"'
            }
          </CodeBlock>
        </div>
        <div className="mt-8">
          <h5 className="font-bold text-blue-500 capitalize">
            4. Install Node.js using NVM
          </h5>
          <CodeBlock
            title="Install the latest LTS version:"
            language="javascript"
          >{`nvm install --lts
`}</CodeBlock>
          <CodeBlock
            title="Set it as default:"
            language="javascript"
          >{`nvm use --lts
nvm alias default lts/*
`}</CodeBlock>
          <CodeBlock title="Check versions:" language="javascript">{`node -v
npm -v

`}</CodeBlock>
        </div>
        <div className="mt-8">
          <h5 className="font-bold text-blue-500 capitalize">5. Install Git</h5>
          <CodeBlock
            title="command:"
            language="javascript"
          >{`sudo apt install -y git
git --version
`}</CodeBlock>
        </div>
        <div className="mt-8">
          <h5 className="font-bold text-blue-500 capitalize">
            6. Clone your Node.js app
          </h5>
          <CodeBlock title="command:" language="javascript">{`cd /var/www
git clone YOUR_REPO_URL myapp
cd myapp
npm install

`}</CodeBlock>
        </div>
        <div className="mt-8">
          <h5 className="font-bold text-blue-500 capitalize">7. Install PM2</h5>
          <p className="pl-4">
            pm2 for running server continously without stop after terminate just
            for javascript framework
          </p>
          <CodeBlock title="command:" language="javascript">{`npm install -g pm2

`}</CodeBlock>
          <div className="mt-4">
            <h1>7.1 Save PM2 process list for reboot</h1>
            <CodeBlock
              title="Save PM2 process list for reboot:"
              language="javascript"
            >{`pm2 save
pm2 startup systemd
sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u $USER --hp /home/$USER

`}</CodeBlock>
          </div>

          <div className="mt-4">
            <h1>7.2 Show all running apps</h1>
            <CodeBlock
              title="Command:"
              language="javascript"
            >{`pm2 start npm --name app-name -- start
pm2 save

`}</CodeBlock>
          </div>
          <div className="mt-4">
            <h1>7.3 Show all running apps</h1>
            <CodeBlock title="Command:" language="javascript">{`pm2 list

`}</CodeBlock>
          </div>
          <div className="mt-4">
            <h1>7.4 Stop the app</h1>
            <CodeBlock
              title="for single app:"
              language="javascript"
            >{`pm2 stop app-name OR pm2 stop 0


`}</CodeBlock>
            <CodeBlock title="for all app:" language="javascript">{`pm2 stop all


`}</CodeBlock>
          </div>
          <div className="mt-4">
            <h1>7.5 Delete app completely from PM2</h1>
            <CodeBlock
              title="for single app:"
              language="javascript"
            >{`pm2 delete app-name OR pm2 delete 0


`}</CodeBlock>
          </div>
          <div className="mt-4">
            <h1>7.6 Check running pm2 logs (optional)</h1>
            <CodeBlock
              title="command:"
              language="javascript"
            >{`pm2 logs app-name


`}</CodeBlock>
          </div>
        </div>
        <div className="mt-8">
          <h5 className="font-bold text-blue-500 capitalize">
            8. Install and configure Nginx
          </h5>
          <p className="pl-4">
            Nginx for reverse poxy and point to specific server when hitting
            domain
          </p>
          <CodeBlock
            title="command:"
            language="javascript"
          >{`sudo apt install -y nginx
sudo systemctl start nginx
sudo systemctl enable nginx
`}</CodeBlock>
        </div>
        <div className="mt-8">
          <h5 className="font-bold text-blue-500 capitalize">
            9. Create Nginx config for your Website
          </h5>

          <CodeBlock
            title="create file and open just one command:"
            language="javascript"
          >{`sudo nano /etc/nginx/sites-available/royalsafari.conf

`}</CodeBlock>
          <CodeBlock
            title="paste and edit with your domain and server running port:"
            language="javascript"
          >{`server {
    listen 80;
    server_name example.com www.example.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}


`}</CodeBlock>
          <h1 className="mt-10 font-bold capitalize">
            9.1 if your website just raw html
          </h1>
          <CodeBlock
            title="paste and edit with your domain and point index.html file of your app:"
            language="javascript"
          >{`server {
    listen 80;
    server_name example.com www.example.com;

    root /var/www/project-folder;
    index index.html;

    location / {
        try_files $uri /index.html;
    }
}


`}</CodeBlock>
          <CodeBlock
            title="Nginx enable and test:"
            language="javascript"
          >{`sudo ln -s /etc/nginx/sites-available/myapp /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx


`}</CodeBlock>
        </div>
        <div className="mt-8">
          <h5 className="font-bold text-blue-500 capitalize">
            10. Set up Firewall (UFW) to Allow SSH, HTTP, and HTTPS:
          </h5>
          <CodeBlock
            title="command:"
            language="javascript"
          >{`sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
sudo ufw status

`}</CodeBlock>
        </div>
        <div className="mt-8">
          <h5 className="font-bold text-blue-500 capitalize">
            11. Set up SSL with Lets Encrypt (optional):
          </h5>
          <CodeBlock
            title="replace 'example.com with your actual domain':"
            language="javascript"
          >{`sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d example.com -d www.example.com
sudo systemctl reload nginx


`}</CodeBlock>
        </div>
      </section>
    </main>
  );
}
