//list of participants
//list of objects
var studentList = [
    {
		ID: "1",
		SSN: "AB45", 
		name: "Mattia",
		address: "via Roma",
		mark: "5"
	},
    {
		ID: "2",
		SSN: "A6T4",
		name: "Fabio",
		address: "via Sommarive",
		mark: "6"
	},
	{
		ID: "3",
		SSN: "9IK8",
		name: "Paolo",
		address: "via Trento",
		mark: "7"
	},
];

/**
 * @brief This function search for a student, given his ID
 * @param StringID
 */
var searchStudentID = function searchStudentID(ID)
{
    for (i=0; i < studentList.length; i++)
	{
		if (studentList[i].ID == ID)
		{
			return studentList[i];
		}
	}
    //if reach this point return null
    return null;
}

/*
 * @brief This function search for a student, given his SSN
 * @param StringID
 */
var searchStudentSSN = function searchStudentSSN(SSN)
{
    for (i=0; i < studentList.length; i++)
	{
		if (studentList[i].SSN == SSN)
		{
			return studentList[i];
		}
    }
    
    //if reach this point return null
    return null;
    
}

/**
 * @brief getter of the list of user
 * @return the list of user
 */
var getList = function getList(){
    return studentList;
}

/**
 * @brief This function delete for a student, given his ID
 * @param StringID
 * @return treu if the student is deleted, false if the studet does not exist
 */
var deleteStudentID = function deleteStudentID(ID)
{
	var position = null;
	
    //search for the position
    for (i=0; i < studentList.length; i++)
	{
            if (studentList[i].ID == ID)
                {
					position = i;
                }
        }
	
    //if is not found return null
	if (position == null)
    	return null;
	else
	{
		return studentList.splice(position, 1)[0];
	}
}

/**
 * @brief This function delete for a student, given his ID
 * @param StringID
 * @return treu if the student is deleted, false if the studet does not exist
 */
var deleteStudentSSN = function deleteStudentSSN(SSN)
{
	var position = null;
	
    //search for the position
    for (i=0; i < studentList.length; i++)
	{
            if (studentList[i].SSN == SSN)
                {
					position = i;
                }
        }
	
    //if is not found return null
	if (position == null)
    	return null;
	else
	{
		return studentList.splice(position, 1)[0];
	}
}

var insertStudent = function insertStudent(student)
{
	if (searchStudentID(student.ID)==null)
	{
		studentList.push(student);
		return true;
	}
	else
		return false;
}

//AGGIUNGERE QUI SOTTO NUOVE FUNZIONI
var searchByMark =function searchByMark(criteria){
    var operator=criteria[0];
    var markToSearch=parseInt(criteria[1]);
    var studenti=[];
    if(operator=='<'){
        for (i=0; i < studentList.length; i++)
        {
            if (studentList[i].mark < markToSearch)
            {
                studenti.push(studentList[i]);
            }
        }
    }else{
        if(operator=='>'){
            for (i=0; i < studentList.length; i++)
            {
                if (studentList[i].mark > markToSearch)
                {
                    studenti.push(studentList[i]);
                }
            }
        }
    }
    return studenti;
}


//export functions
exports.searchStudentID = searchStudentID; 
exports.searchStudentSSN = searchStudentSSN; 
exports.deleteStudentID = deleteStudentID; 
exports.deleteStudentSSN = deleteStudentSSN; 
exports.insertStudent = insertStudent;  
exports.getList = getList;
exports.searchByMark=searchByMark;