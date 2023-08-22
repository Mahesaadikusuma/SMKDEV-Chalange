function data(name, massa, tinggi) {
  const BMI = Math.floor(massa / (tinggi * tinggi));

  return { BMI, name, tinggi, massa };
}

function kondisi() {
  console.log("============== DATA 1 ==============");
  const udin = data("Udin", 78, 1.69);
  const nanang = data("Nanang", 92, 1.95);
  const kodisi = udin.BMI > nanang.BMI;

  console.log(`BMI Udin: ${Math.round(udin.BMI)}`);
  console.log(`BMI Nanang: ${Math.round(nanang.BMI)}`);

  if (kodisi === true) {
    console.log(`BMI ${udin.name} (${udin.BMI.toFixed(1)}) lebih tinggi dari BMI ${nanang.name} (${nanang.BMI.toFixed(1)})`);
  } else {
    console.log(`BMI ${udin.name} (${udin.BMI.toFixed(1)}) lebih kurang dari BMI ${nanang.name} (${nanang.BMI.toFixed(1)})`);
  }
  console.log("============== DATA 1 END ==============");

  console.log("============== DATA 2 ==============");
  const udin2 = data("Udin", 95, 1.88);
  const nanang2 = data("Nanang", 85, 1.76);
  const kodisi2 = udin2.BMI > nanang2.BMI;

  console.log(`BMI Udin: ${Math.round(udin2.BMI)} KG`);
  console.log(`BMI Nanang: ${Math.round(nanang2.BMI)} KG`);

  if (kodisi2 == true) {
    console.log(`BMI ${udin2.name} (${udin2.BMI.toFixed(1)} KG) lebih tinggi dari BMI ${nanang2.name} (${nanang2.BMI.toFixed(1)} KG)`);
  } else {
    console.log(`BMI ${udin2.name} (${udin2.BMI.toFixed(1)} KG) lebih kurang dari BMI ${nanang2.name} (${nanang2.BMI.toFixed(1)} KG)`);
  }
  console.log("============== DATA 2 END ==============");

  // ini tes saja
  console.log(data("creator", 80, 2.0));
}

kondisi();
