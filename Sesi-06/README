

aplikasi ubah warna background dan teks
----
<body>
  <h1>Ubah Warna</h1>
  <label for="">Warna Latar</label>
  <input type="color" id="warna-latar" />
  <br />
  <label for="">Warna Teks</label>
  <input type="color" id="warna-teks" />

  <br />
  <button onclick="reset()">Reset Warna</button>
  <script>
    var warnaLatar = document.getElementById("warna-latar");
    var warnaTeks = document.getElementById("warna-teks");

  //   normal();

    warnaLatar.addEventListener("change", function () {
      document.body.style.backgroundColor = warnaLatar.value;
      console.log(warnaLatar.value);
    });
    warnaTeks.addEventListener("change", function () {
      document.body.style.color = warnaTeks.value;
      console.log(warnaTeks.value);
    });

    function reset() {
      // normal();

      //di refresh
      location.reload();
    }

    function normal() {
      // default bg dan warna teks / tidak di refresh
      document.body.style.backgroundColor = "aqua";
      document.body.style.color = "darkblue";

      warnaLatar.value = "#00ffff";
      warnaTeks.value = "#00008b";

      console.log(warnaLatar.value);
      console.log(warnaTeks.value);

    }
  </script>
</body>

pembelajaran tentang dom (java script)
-------------
<body style="background-color: aqua;">
    <h1 id="dom">Belajar DOM</h1>
    <a href="https://google.com" target="_blank">Klik Disini</a>
    <br>

    <!-- ubah warna -->
    <label for="">Ubah Warna</label>
    <input type="color" id="warna">

    <br>
    <script>
        document.write("Hello World");
        document.write("<br>");
        document.write("Hello World YAL");
        document.write("<h2>Saya Sedang Belajar DOM</h2>");

        var head = document.head;
        var body = document.body;
        var judulLength = document.title.length;
        // console.log(head, body, judulLength);

        var judul = document.createElement("p");
        judul.textContent = "Belajar JS dibuat dari createElement";
        document.body.append(judul);

        var dom = document.getElementById("dom");
        console.log("Sebelum Dihapus");
        console.log(dom);
        console.log("Sesudah Dihapus");
        dom.remove();

        console.log(document.getElementsByTagName("h1")[0]);
        document.body.style.color = "blue";
        document.body.style.padding = "20px";

    </script>
</body>

regex exp
-------------------------------------------------
<body>
  <h1>Belajar Regex</h1>

  <form action="">
    <label for="password">Masukkan Password Anda</label>
    <input type="password" required />
    <button type="submit">Submit Data</button>
  </form>
  <script>
    var foo = /ab+c/;
    var foo2 = "ab+c";
    var foo3 = new RegExp("ab+c");
    console.log(typeof foo);
    console.log(typeof foo2);
    console.log(typeof foo3);

    console.log("====================================");

    var foo = "Belajar JavaScript"
    var pola = /JavaScript/;
    console.log(pola.test(foo));
    if (pola.test(foo)) {
      console.log("Pola JavaScript Ditemukan");
    } else {
      console.log("Pola JavaScript Tidak Ditemukan");
    }

  //   cek belajar
  console.log(/Belajar/.test(foo));
  console.log(/belajar/.test(foo));


  // cek digit
  var foo = "1 jam sama dengan 60 menit, juga sama dengan 3600 detik"
  var pola = /\d+/g
  console.log(pola.exec(foo));
  console.log(pola.exec(foo));
  console.log(pola.exec(foo));
  console.log(pola.exec(foo)); //tidak ada

  var foo = "Belajar JavaScript"
  console.log(/JavaScript/.test(foo))
  console.log(/javaScript/.test(foo))
  console.log(/Belajar/.test(foo))
  console.log(/belajar/.test(foo))
  console.log(/Java/.test(foo))
  console.log(/ajar/.test(foo))

  console.log("====================================");

  // var pola = /[abcde]../
  var pola = /[a-f 1]../ //support
  console.log(pola.test("abaa"))
  console.log(pola.test("fba"))
  console.log(pola.test("1dd"))
  console.log(pola.test("add"))
  console.log(pola.test(" dd"))
  console.log(pola.test("belajar"))
  </script>
</body>

------------------------
tugas mandiri ganti warna
<body>
  <h1>Buat Animation</h1>
  <h3>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla obcaecati
    dolor qui aut! Tempore beatae nam quaerat obcaecati veritatis! Accusamus
    ut cupiditate quisquam debitis? Libero aliquam ex ut aspernatur rem!
  </h3>

  <script>
      // default warna berhenti 5 detik
      setTimeout(() => {
         document.body.style.backgroundColor = "aqua"; 
      }, 100);

      // untuk ganti warna 2 detik sekali
      var waktu = setInterval(() => {
          console.log("update")
          // cek warna h3
          var h3 = document.getElementsByTagName("h3")[0];
          var warna = h3.style.color;
          // console.log(warna)
          h3.style.color = warna == "red" ? "blue" : "red";
      }, 400);

  </script>
</body>

tugas input no telp
<body>
  <!-- 
      1. disaat inspect (wajib menggunakan number)
      2. disaat diganti di element tipe (number nya gk bisa berubah jadi text)
      durasi 15 menit (boleh browsing)
   -->
  <h3>Aplikasi Input No Telp</h3>
  <hr />
  <form action="">
    <label for="no_telp">No Telp</label>
    <input type="number" />
    <button>Submit</button>
  </form>
</body>