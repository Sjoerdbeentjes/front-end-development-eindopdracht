var stageField = document.getElementById('stage');
var projectField = document.getElementById('project');

var projectSelector = document.querySelector('input[value=project]');
var stageSelector = document.querySelector('input[value=stage]');
var submitButton = document.querySelector('input[type=submit]');

var stageShow
var projectShow

stageShow = function showStage() {
	stageField.classList.remove("hidden");
	submitButton.classList.remove("hidden");
	projectField.classList.add("hidden");
};

projectShow = function showProject() {
	stageField.classList.add("hidden");
	submitButton.classList.remove("hidden");
	projectField.classList.remove("hidden");
};

function hideAll() {
	stageField.classList.add("hidden");
	submitButton.classList.add("hidden");
	projectField.classList.add("hidden");
};

stageSelector.onclick = stageShow;
projectSelector.onclick = projectShow;
hideAll();
