export {screenUpdate}
import {loadProjectListFromLocalStorage, saveProjectListToLocalStorage} from "./localStorageFunctions.js";

function screenUpdate(projectsList) {
    //updating the project names in select elements
    let dataListElement = document.querySelector("#project-choice-list");
    addTaskDialogUpdateDataList(projectsList, dataListElement);

    //no need anymore for it..., will use just one dataList for the task form's
    // let dataListElement = document.querySelectorAll("#project-choice-list");
    // dataListElement.forEach(element => addTaskDialogUpdateDataList(projectsList, element));

    //update project sidebar submenu
    updateProjectSubMenuInDom(projectsList);

    //save the project list to local storage
    // console.log(projectsList);
    saveProjectListToLocalStorage(projectsList);
  }
  
  function updateProjectSubMenuInDom(projectsList) {
    let subMenu = document.querySelector("#projectsSubMenu > div");
    subMenu.innerText = "";
    let list = projectsList.list;
    list.forEach((project) => {
      let deleteButton = document.createElement("button");
      deleteButton.innerText = "X";
      deleteButton.classList.add("deleteButton", "buttonStyle");
      let newLi = document.createElement("li");
      let newButton = document.createElement("button");
      // newButton.classList.add('buttonStyle');
  
      let newSpan = document.createElement("span");
      newSpan.innerText = project.projectName;
      newButton.appendChild(newSpan);
      newButton.classList.add("projectButton");

      
      newLi.appendChild(deleteButton);
      newLi.appendChild(newButton);
  
      let newNumberSpan = document.createElement("span");
      newNumberSpan.classList.toggle("numberCount");
      newNumberSpan.innerText = "    " + project.list.length;
      newLi.appendChild(newNumberSpan);
  
      subMenu.appendChild(newLi);
    });
  }

  function updateDataList(element, arr) {
    element.innerText = "";
    arr.forEach((value) => {
      let newOption = document.createElement("option");
      newOption.value = value;
      element.appendChild(newOption);
    });
  }
  
  function addTaskDialogUpdateDataList(projectList, element) {
    let nameList = projectList.getProjectNameArray();
    updateDataList(element, nameList);
  }
  