export const EXAMPLE_EML = `
MIME-Version: 1.0
Date: Mon, 18 Dec 2023 22:53:32 -0500
Message-ID: <CAMD7oEoAg3Qn7F0AB6H_S8vOUQDZKGNYXfB8WMBNv9zGc-bS=g@mail.gmail.com>
Subject: Technical test designli
From: Oscar Amado <oscar@gmail.com>
To: Oscar Amado <oscar@gmail.com>
Content-Type: multipart/mixed; boundary="0000000000001313f6060cd4cff6"

--0000000000001313f6060cd4cff6
Content-Type: multipart/alternative; boundary="0000000000001313f5060cd4cff4"

--0000000000001313f5060cd4cff4
Content-Type: text/plain; charset="UTF-8"

Hola,
Esto es un correo de prueba.

-- 

Oscar Amado

Full-Stack Developer

--0000000000001313f5060cd4cff4
Content-Type: text/html; charset="UTF-8"
Content-Transfer-Encoding: quoted-printable

<div dir=3D"ltr">Hola, <br>Esto es un correo de prueba.<br><br><a href=3D"h=
ttps://github.com/aws/aws-lambda-go/blob/main/events/testdata/ses-sns-event=
.json">https://github.com/aws/aws-lambda-go/blob/main/events/testdata/ses-s=
ns-event.json</a><br><br clear=3D"all"><div><br></div><span class=3D"gmail_=
signature_prefix">-- </span><br><div dir=3D"ltr" class=3D"gmail_signature" =
data-smartmail=3D"gmail_signature"><div dir=3D"ltr"><p align=3D"right" styl=
e=3D"margin-left:0cm;text-align:right"><span style=3D"line-height:107%;font=
-family:Bahnschrift,sans-serif">Oscar Felipe Guerrero Amado<span></span></s=
pan></p>

<p align=3D"right" style=3D"margin-left:0cm;text-align:right"><span style=
=3D"line-height:107%;font-family:Bahnschrift,sans-serif">Full-Stack Develop=
er</span></p>

<p align=3D"right" style=3D"margin-left:0cm;text-align:right"><br></p></div=
></div></div>

--0000000000001313f5060cd4cff4--
--0000000000001313f6060cd4cff6
--0000000000001313f6060cd4cff6--
`;

export const EXAMPLE_EML_ATTACHMENT = `
MIME-Version: 1.0
Date: Mon, 18 Dec 2023 22:53:32 -0500
Message-ID: <CAMD7oEoAg3Qn7F0AB6H_S8vOUQDZKGNYXfB8WMBNv9zGc-bS=g@mail.gmail.com>
Subject: Technical test designli
From: Oscar Amado <oscar@gmail.com>
To: Oscar Amado <oscar@gmail.com>
Content-Type: multipart/mixed; boundary="0000000000001313f6060cd4cff6"

--0000000000001313f6060cd4cff6
Content-Type: multipart/alternative; boundary="0000000000001313f5060cd4cff4"

--0000000000001313f5060cd4cff4
Content-Type: text/plain; charset="UTF-8"

Hola,
Esto es un correo de prueba.

-- 

Oscar Amado

Full-Stack Developer

--0000000000001313f5060cd4cff4
Content-Type: text/html; charset="UTF-8"
Content-Transfer-Encoding: quoted-printable

<div dir=3D"ltr">Hola, <br>Esto es un correo de prueba.<br><br><a href=3D"h=
ttps://github.com/aws/aws-lambda-go/blob/main/events/testdata/ses-sns-event=
.json">https://github.com/aws/aws-lambda-go/blob/main/events/testdata/ses-s=
ns-event.json</a><br><br clear=3D"all"><div><br></div><span class=3D"gmail_=
signature_prefix">-- </span><br><div dir=3D"ltr" class=3D"gmail_signature" =
data-smartmail=3D"gmail_signature"><div dir=3D"ltr"><p align=3D"right" styl=
e=3D"margin-left:0cm;text-align:right"><span style=3D"line-height:107%;font=
-family:Bahnschrift,sans-serif">Oscar Felipe Guerrero Amado<span></span></s=
pan></p>

<p align=3D"right" style=3D"margin-left:0cm;text-align:right"><span style=
=3D"line-height:107%;font-family:Bahnschrift,sans-serif">Full-Stack Develop=
er</span></p>

<p align=3D"right" style=3D"margin-left:0cm;text-align:right"><br></p></div=
></div></div>

--0000000000001313f5060cd4cff4--
--0000000000001313f6060cd4cff6
Content-Type: application/json; name="example.json"
Content-Disposition: attachment; filename="example.json"
Content-Transfer-Encoding: base64
X-Attachment-Id: f_lqbt7nsn0
Content-ID: <f_lqbt7nsn0>

ew0KICAibmFtZSI6ICJPc2NhciBBbWFkbyIsDQogICJyb2xlIjogImJhY2tlbmQiDQp9DQo=
--0000000000001313f6060cd4cff6--
`;

export const EXAMPLE_EML_LINK = `
MIME-Version: 1.0
Date: Mon, 18 Dec 2023 22:53:32 -0500
Message-ID: <CAMD7oEoAg3Qn7F0AB6H_S8vOUQDZKGNYXfB8WMBNv9zGc-bS=g@mail.gmail.com>
Subject: Technical test designli
From: Oscar Amado <oscar@gmail.com>
To: Oscar Amado <oscar@gmail.com>
Content-Type: multipart/mixed; boundary="0000000000001313f6060cd4cff6"

--0000000000001313f6060cd4cff6
Content-Type: multipart/alternative; boundary="0000000000001313f5060cd4cff4"

--0000000000001313f5060cd4cff4
Content-Type: text/plain; charset="UTF-8"

Hola,
Esto es un correo de prueba.

https://raw.githubusercontent.com/aws/aws-lambda-go/main/events/testdata/ses-sns-event.json


--

Oscar Amado

Full-Stack Developer

--0000000000001313f5060cd4cff4
Content-Type: text/html; charset="UTF-8"
Content-Transfer-Encoding: quoted-printable

<div dir=3D"ltr">Hola, <br>Esto es un correo de prueba.<br><br><a href=3D"h=
ttps://github.com/aws/aws-lambda-go/blob/main/events/testdata/ses-sns-event=
.json">https://github.com/aws/aws-lambda-go/blob/main/events/testdata/ses-s=
ns-event.json</a><br><br clear=3D"all"><div><br></div><span class=3D"gmail_=
signature_prefix">-- </span><br><div dir=3D"ltr" class=3D"gmail_signature" =
data-smartmail=3D"gmail_signature"><div dir=3D"ltr"><p align=3D"right" styl=
e=3D"margin-left:0cm;text-align:right"><span style=3D"line-height:107%;font=
-family:Bahnschrift,sans-serif">Oscar Felipe Guerrero Amado<span></span></s=
pan></p>

<p align=3D"right" style=3D"margin-left:0cm;text-align:right"><span style=
=3D"line-height:107%;font-family:Bahnschrift,sans-serif">Full-Stack Develop=
er</span></p>

<p align=3D"right" style=3D"margin-left:0cm;text-align:right"><br></p></div=
></div></div>

--0000000000001313f5060cd4cff4--
--0000000000001313f6060cd4cff6
--0000000000001313f6060cd4cff6--
`;
