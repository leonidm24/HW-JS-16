import {
  modalHide,
  modalShow,
  createInputsForModal,
  generationID,
} from "./functions.js";

const btnShowMadal = document.querySelector(".add"),
  btnCloseModal = document.getElementById("close"),
  btnSaveModal = document.getElementById("save"),
  select = document.getElementById("select"),
  formInfo = document.querySelector(".form-info"),
  store = [
    "Назва продукту",
    "Вартість продукту",
    "Посилання на зображення",
    "Опис продукту",
    "Ключеві слова (Розділяти комою)",
  ],
  rest = [
    "Назва страви",
    "Вага страви",
    "Інгрідієнти",
    "Ціна",
    "Посилання на зображення",
    "Ключеві слова (Розділяти комою)",
  ],
  video = [
    "Назва відео",
    "Посилання на відео",
    "Опис відео",
    "Ключеві слова (Розділяти комою)",
  ];

let typeCategory = null;

btnShowMadal.addEventListener("click", modalShow);
btnCloseModal.addEventListener("click", modalHide);

select.addEventListener("change", () => {
  typeCategory = select.value;

  if (select.value === "Магазин") {
    formInfo.insertAdjacentHTML("beforeend", createInputsForModal(store));
  } else if (select.value === "Відео хостинг") {
    formInfo.insertAdjacentHTML("beforeend", createInputsForModal(video));
  } else if (select.value === "Ресторан") {
    formInfo.insertAdjacentHTML("beforeend", createInputsForModal(rest));
  } else {
    console.error("Жоден з пунктів не валідний.");
    return;
  }
});

btnSaveModal.addEventListener("click", () => {
  const [...inputs] = document.querySelectorAll(".form-info input");
  const objStore = {
    id: "",
    status: false,
    productName: "",
    porductPrice: 0,
    productImage: "",
    productDescription: "",
    productQuantity: 0,
    keywords: [],
  };

  const objRest = {
    id: "",
    productName: "",
    productWeight: 0,
    dishIngredients: "",
    dishPrice: 0,
    productImageUrl: "",
    keywords: [],
    totalWeight: 0,
    stopList: false,
    dishLike: 0,
  };
    
    const objVideo = {
      id: "",
      videoName: "",
      videoUrl: "",
      keywords: [],
      stopList: false,
      like: 0,
      videoRegisterYear: "",
      videoCountry: "",
      videosDescription: "",
    };

  if (typeCategory === "Магазин") {
    objStore.id = generationID();
    inputs.forEach((input) => {
      if (input.value.length > 3) {
        if (input.dataset.type === "Назва продукту") {
          objStore.productName = input.value;
        } else if (input.dataset.type === "Вартість продукту") {
          objStore.porductPrice = parseFloat(input.value);
        } else if (input.dataset.type === "Посилання на зображення") {
          objStore.productImage = input.value;
        } else if (input.dataset.type === "Опис продукту") {
          objStore.productDescription = input.value;
        } else if (input.dataset.type === "Ключеві слова (Розділяти комою)") {
          objStore.keywords.push(...input.value.split(","));
        }
        input.classList.remove("error");
      } else {
        input.classList.add("error");
        return;
      }
    });
    objStore.date = new Date();
    if (objStore.productQuantity <= 0) {
      objStore.status = false;
    } else {
      objStore.status = true;
    }
    const store = JSON.parse(localStorage.BDStore);
    store.push(objStore);
    localStorage.BDStore = JSON.stringify(store);
  }
    

  if (typeCategory === "Ресторан") {
    objRest.id = generationID();
    inputs.forEach((input) => {
      if (input.value.length > 3) {
        if (input.dataset.type === "Назва страви") {
          objRest.productName = input.value;
        } else if (input.dataset.type === "Вага страви") {
          objRest.productWeight = parseFloat(input.value);
        } else if (input.dataset.type === "Інгрідиєнти") {
          objRest.dishIngredients = parseFloat(input.value);
        } else if (input.dataset.type === "Ціна") {
          objRest.dishPrice = parseFloat(input.value);
        } else if (input.dataset.type === "Посилання на зображення") {
          objRest.productImageUrl = input.value;
        } else if (input.dataset.type === "Опис страви") {
          objRest.dishDescription = input.value;
        } else if (input.dataset.type === "Ключеві слова (Розділяти комою)") {
          objRest.keywords.push(...input.value.split(","));
        }
        input.classList.remove("error");
      } else {
        input.classList.add("error");
        return;
      }
    });
    objRest.date = new Date();
    if (objRest.productQuantity <= 0) {
      objRest.stopList = false;
    } else {
      objRest.stopList = true;
    }
    const rest = JSON.parse(localStorage.BDRest);
    rest.push(objRest);
    localStorage.BDRest = JSON.stringify(rest);
  }
    

    if (typeCategory === "Відео хостинг") {
      objVideo.id = generationID();
      inputs.forEach((input) => {
        if (input.value.length > 3) {
          if (input.dataset.type === "Назва відео") {
            objVideo.videoName = input.value;
          } else if (input.dataset.type === "Посилання на відео") {
            objVideo.videoUrl = input.value;
          } else if (input.dataset.type === "Опис відео") {
            objVideo.videosDescription = input.value;
          } else if (input.dataset.type === "Ключеві слова (Розділяти комою)") {
            objVideo.keywords.push(...input.value.split(","));
          }
          input.classList.remove("error");
        } else {
          input.classList.add("error");
          return;
        }
      });
        
      objVideo.date = new Date();
      const video = JSON.parse(localStorage.BDVideo);
      const localVideoOne = {
        id: generationID(),
        videoName: "Rick and Morty - 3 season trailer",
        videoUrl: "../video/video/rick-and-morty-3rd-season.mp4",
        keywords: ["Rick", "Morty", "3rd season"],
        stopList: false,
        like: 0,
        videoRegisterYear: "",
        videoCountry: "USA",
      };
      const localVideoTwo = {
        id: generationID(),
        videoName: "Rick and Morty - 4 season trailer",
        videoUrl: "../video/video/rick-and-morty-4th-season.mp4",
        keywords: ["Rick", "Morty", "4th season trailer"],
        stopList: false,
        like: 0,
        videoRegisterYear: "",
        videoCountry: "USA",
      };
      const localVideoThree = {
        id: generationID(),
        videoName: "Rick and Morty - 6 season trailer",
        videoUrl: "../video/video/rick-and-morty-6th-season.mp4",
        keywords: ["Rick", "Morty", "6th season trailer"],
        stopList: false,
        like: 0,
        videoRegisterYear: "",
        videoCountry: "",
      };
      const remoteVideoOne = {
        id: generationID(),
        videoName: "Rick and Morty - 5 season trailer",
        videoUrl: "https://www.youtube.com/watch?v=qbHYYXj2gMc",
        keywords: ["Rick", "Morty", "5th season trailer"],
        stopList: false,
        like: 0,
        videoRegisterYear: "",
        videoCountry: "USA",
      };
      const remoteVideoTwo = {
        id: generationID(),
        videoName: "Rick and Morty - 2 season trailer",
        videoUrl: "https://www.youtube.com/watch?v=_IZfO_LfK5Q",
        keywords: ["Rick", "Morty", "2nd season trailer"],
        stopList: false,
        like: 0,
        videoRegisterYear: "",
        videoCountry: "USA",
      };
      const remoteVideoThree = {
        id: generationID(),
        videoName: "Rick and Morty - 1 season trailer",
        videoUrl: "https://www.youtube.com/watch?v=WNhH00OIPP0",
        keywords: ["Rick", "Morty", "1st season trailer"],
        stopList: false,
        like: 0,
        videoRegisterYear: "",
        videoCountry: "USA",
      };
      video.push(localVideoOne, localVideoTwo, localVideoThree);
      video.push(remoteVideoOne, remoteVideoTwo, remoteVideoThree);
      video.push(objVideo);
      localStorage.BDVideo = JSON.stringify(video);
    }
});
