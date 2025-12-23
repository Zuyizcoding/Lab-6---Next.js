# Hướng Dẫn Deploy Next.js Exercises

## Bước 1️⃣: Push lên GitHub

### 1. Khởi tạo Git Repository (nếu chưa có)

```bash
cd d:\UIT\Y3 - S1\Web\Lab\Lab6\nextjs-exercises
git init
```

### 2. Tạo file .gitignore (nếu chưa có)

File `.gitignore` đã có sẵn, kiểm tra nó có những dòng này:

```
# dependencies
/node_modules

# production
/build
/.next
/out

# env files
.env*.local

# vercel
.vercel
```

### 3. Add và Commit code

```bash
git add .
git commit -m "Initial commit: Next.js exercises completed"
```

### 4. Tạo Repository trên GitHub

1. Vào https://github.com
2. Click nút **"New"** (hoặc dấu **+** ở góc phải)
3. Đặt tên repository: `nextjs-exercises` (hoặc tên bạn muốn)
4. Chọn **Public** hoặc **Private**
5. **KHÔNG** tick "Add a README file" (vì đã có sẵn)
6. Click **"Create repository"**

### 5. Link Local Repository với GitHub

GitHub sẽ hiển thị hướng dẫn, copy và chạy:

```bash
git remote add origin https://github.com/YOUR-USERNAME/nextjs-exercises.git
git branch -M main
git push -u origin main
```

**Thay `YOUR-USERNAME` bằng username GitHub của bạn!**

---

## Bước 2️⃣: Deploy lên Vercel

### Phương án A: Deploy qua Vercel CLI (Nhanh)

#### 1. Cài đặt Vercel CLI

```bash
npm install -g vercel
```

#### 2. Login vào Vercel

```bash
vercel login
```

Chọn phương thức login (GitHub, Email, etc.)

#### 3. Deploy project

```bash
cd d:\UIT\Y3 - S1\Web\Lab\Lab6\nextjs-exercises
vercel
```

Trả lời các câu hỏi:

- **Set up and deploy?** → `Y`
- **Which scope?** → Chọn account của bạn
- **Link to existing project?** → `N`
- **Project name?** → `nextjs-exercises` (hoặc Enter để dùng tên folder)
- **Directory?** → `./` (Enter)
- **Override settings?** → `N`

#### 4. Deploy production

```bash
vercel --prod
```

✅ Xong! URL sẽ được hiển thị, ví dụ: `https://nextjs-exercises.vercel.app`

---

### Phương án B: Deploy qua Vercel Dashboard (Dễ hơn)

#### 1. Truy cập Vercel

Vào https://vercel.com và login bằng GitHub

#### 2. Import Repository

1. Click **"Add New..."** → **"Project"**
2. Click **"Import Git Repository"**
3. Chọn repository `nextjs-exercises` từ danh sách
4. Click **"Import"**

#### 3. Configure Project

Vercel tự động detect Next.js, bạn chỉ cần:

1. **Project Name**: Giữ nguyên hoặc đổi
2. **Framework Preset**: Next.js (auto-detected) ✅
3. **Root Directory**: `./` (default)
4. **Build Command**: `npm run build` (auto)
5. **Install Command**: `npm install` (auto)

#### 4. Environment Variables

⚠️ **QUAN TRỌNG**: Thêm environment variable cho Exercise 3

Click **"Environment Variables"** và thêm:

- **Key**: `API_SECRET_KEY`
- **Value**: `my-super-secret-key-12345`
- **Environment**: All (Production, Preview, Development)

Click **"Add"**

#### 5. Deploy

Click **"Deploy"** → Đợi 2-3 phút

✅ **Deploy thành công!**

URL của bạn: `https://nextjs-exercises-YOUR-USERNAME.vercel.app`

---

## Bước 3️⃣: Kiểm tra Deployment

### Test các routes:

- **Homepage**: `https://your-app.vercel.app`
- **Blog**: `https://your-app.vercel.app/blog`
- **Dashboard**: `https://your-app.vercel.app/dashboard`
- **API Test**: `https://your-app.vercel.app/api-test`
- **API Endpoint**: `https://your-app.vercel.app/api/secret`

### Test Exercise 3 API:

```bash
# Fail (no key)
curl https://your-app.vercel.app/api/secret

# Success (with key)
curl -H "x-api-key: my-super-secret-key-12345" https://your-app.vercel.app/api/secret
```

---

## Bước 4️⃣: Update Code sau này

### Khi có thay đổi code:

```bash
# 1. Add changes
git add .

# 2. Commit
git commit -m "Update: description of changes"

# 3. Push to GitHub
git push origin main
```

**Vercel sẽ tự động deploy lại!** ✨

Hoặc dùng CLI:

```bash
vercel --prod
```

---

## Troubleshooting

### ❌ Lỗi: "Build failed"

**Giải pháp:**

```bash
# Test build locally trước
npm run build

# Nếu có lỗi, sửa rồi push lại
```

### ❌ Lỗi: "API returns 401"

**Nguyên nhân:** Chưa set environment variable

**Giải pháp:**

1. Vào Vercel Dashboard → Project Settings
2. Tab **"Environment Variables"**
3. Thêm `API_SECRET_KEY` = `my-super-secret-key-12345`
4. Redeploy project

### ❌ Lỗi: "Module not found"

**Giải pháp:**

```bash
# Xóa node_modules và reinstall
rm -rf node_modules package-lock.json
npm install

# Commit lại package-lock.json
git add package-lock.json
git commit -m "Fix: update dependencies"
git push
```

---

## Custom Domain (Optional)

### Thêm domain riêng:

1. Vào Vercel Dashboard → Project
2. Tab **"Settings"** → **"Domains"**
3. Nhập domain của bạn: `yourdomain.com`
4. Follow hướng dẫn setup DNS

---

## Tips

✅ **Best Practices:**

- Luôn test `npm run build` trước khi push
- Commit message rõ ràng
- Không commit `.env.local` (đã có trong .gitignore)
- Dùng Vercel Analytics để xem traffic

✅ **Vercel Features:**

- Auto deploy on push
- Preview deployments cho mỗi PR
- Edge Functions (fast globally)
- Free SSL certificate
- Unlimited bandwidth cho hobby projects

---

## Kết quả

Sau khi hoàn thành, bạn sẽ có:

- ✅ Code trên GitHub (backup & version control)
- ✅ Live website trên Vercel (accessible globally)
- ✅ Auto deploy on push (CI/CD)
- ✅ HTTPS enabled (secure)

**Live URL example:** `https://nextjs-exercises.vercel.app`

🎉 Chúc mừng! Project của bạn đã online!
