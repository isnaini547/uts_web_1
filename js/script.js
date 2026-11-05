
document.addEventListener("DOMContentLoaded", function () {
    const daftarBuku = document.getElementById("daftarBuku");
    const formBuku = document.getElementById("formBuku");

    function tampilkanBuku() {
        if (!daftarBuku || typeof dataKatalogBuku === "undefined") {
            return;
        }

        daftarBuku.innerHTML = "";

        dataKatalogBuku.forEach(function (buku, index) {
            const baris = `
                <tr>
                    <td>${index + 1}</td>
                    <td>
                        ${buku.cover
                            ? `<img src="${buku.cover}" width="70" alt="${buku.namaBarang}">`
                            : "-"}
                    </td>
                    <td>${buku.kodeBarang}</td>
                    <td>${buku.namaBarang}</td>
                    <td>${buku.jenisBarang}</td>
                    <td>${buku.edisi}</td>
                    <td>${buku.stok}</td>
                    <td>${buku.harga}</td>
                </tr>
            `;

            daftarBuku.innerHTML += baris;
        });
    }

    tampilkanBuku();

if (formBuku) {
    formBuku.addEventListener("submit", function (event) {
        event.preventDefault();

        const foto = document.getElementById("foto").value.trim();
        const kodeBarang = document.getElementById("kodeBarang").value.trim();
        const namaBarang = document.getElementById("namaBarang").value.trim();
        const jenisBarang = document.getElementById("jenisBarang").value.trim();
        const edisi = document.getElementById("edisi").value.trim();
        const stok = Number(document.getElementById("stok").value);
        const harga = Number(document.getElementById("harga").value);

        if (!kodeBarang || !namaBarang || !jenisBarang || !edisi ||
            stok < 0 || harga <= 0) {
            alert("Mohon isi data buku dengan benar.");
            return;
        }

        dataKatalogBuku.push({
            kodeBarang: kodeBarang,
            namaBarang: namaBarang,
            jenisBarang: jenisBarang,
            edisi: edisi,
            stok: stok,
            harga: "Rp " + harga.toLocaleString("id-ID"),
            cover: foto ? "img/" + foto : ""
        });

        tampilkanBuku();
        formBuku.reset();

        alert("Buku berhasil ditambahkan!");
    });
}

    
});




