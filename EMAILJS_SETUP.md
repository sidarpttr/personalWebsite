# EmailJS Setup Guide

EmailJS entegrasyonu tamamlandı! Şimdi EmailJS hesabınızı yapılandırmanız gerekiyor.

## 📋 Adımlar

### 1. EmailJS Hesabı Oluştur
1. [emailjs.com](https://www.emailjs.com) adresine git
2. "Sign Up" ile ücretsiz hesap oluştur
3. Email adresinizi doğrula

### 2. Email Servisi Ekle
1. Dashboard'da **"Email Services"** sekmesine git
2. **"Add New Service"** butonuna tıkla
3. **Gmail** seçeneğini seç
4. Gmail hesabınızı bağla (sidar4932@gmail.com)
5. **Service ID**'yi kopyala (örn: `service_abc123`)

### 3. Email Template Oluştur
1. **"Email Templates"** sekmesine git
2. **"Create New Template"** butonuna tıkla
3. Aşağıdaki template'i kullan:

```
Subject: Yeni İletişim Formu Mesajı - {{from_name}}

Gönderen: {{from_name}}
Email: {{from_email}}

Mesaj:
{{message}}
```

4. Template'i kaydet
5. **Template ID**'yi kopyala (örn: `template_xyz789`)

### 4. Public Key Al
1. **"Account"** > **"General"** sekmesine git
2. **Public Key**'i kopyala (örn: `abc123XYZ`)

### 5. Kodda Güncelle
`ContactForm.js` dosyasında şu satırları güncelle:

```javascript
const serviceId = 'YOUR_SERVICE_ID';   // Adım 2'den aldığın Service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Adım 3'ten aldığın Template ID
const publicKey = 'YOUR_PUBLIC_KEY';   // Adım 4'ten aldığın Public Key
```

## ✅ Test Et
1. Formu doldur ve gönder
2. sidar4932@gmail.com adresine email gelecek
3. Başarılı mesajı görmelisin

## 🔒 Güvenlik Notu
- Public Key'i kodda kullanmak güvenlidir (ismi zaten "public")
- EmailJS otomatik spam koruması sağlar
- Ücretsiz planda ayda 200 email hakkınız var

## 🎯 Özellikler
- ✓ Loading state (gönderiliyor animasyonu)
- ✓ Başarı/hata mesajları
- ✓ Otomatik form temizleme
- ✓ Form kapanma (2 saniye sonra)
- ✓ Disabled state (gönderim sırasında)

Herhangi bir sorun olursa bana sor! 🚀
