document.getElementById("bmiForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Ambil input dari pengguna
    const gender = document.getElementById("gender").value;
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);

    // Validasi input
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert("Harap masukkan tinggi dan berat badan yang valid!");
        return;
    }

    // Rumus BMI
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

    // Kategori BMI
    let category = "";
    if (bmi < 18.5) {
        category = "Kurus";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Berat Badan Berlebih";
    } else {
        category = "Obesitas";
    }

    // Tampilkan hasil
    document.getElementById("bmiValue").innerText = `BMI Anda: ${bmi}`;
    document.getElementById("bmiCategory").innerText = `Kategori: ${category}`;
    document.getElementById("result").classList.remove("hidden");
});
