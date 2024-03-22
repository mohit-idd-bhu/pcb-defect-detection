# Project Title

Implementation of Printed Circuit Board (PCB) defect detection through modern Machine Learning (ML) algorithms.

## Description

The following paper is an implementation of defect detection algorithm which uses Faster RCNN as its backbone architecture.
It aims to improve Generalization Error (GE)  and imrpove robustness in the model through utlizing the spectral properties of network weights.
It uses a regularization parameter $\lambda$ which is set manually and varied to minimize correlation among network filters and reduce redundancy.

## Dependencies

* Jupyter
* PyTorch
* OpenCV

## Model

![Model](https://github.com/mohit-idd-bhu/pcb-defect-detection/blob/master/model.png)

This above model of Faster RCNN is used for prediction of target bounding boxes.

## Implementation

![](https://github.com/mohit-idd-bhu/pcb-defect-detection/blob/master/regularizer.png)

The follwing method is implemented for the regularizing model.

## Results

![](https://github.com/mohit-idd-bhu/pcb-defect-detection/blob/master/results%201.png)

Represents the average IoU value over all the validation data

![](https://github.com/mohit-idd-bhu/pcb-defect-detection/blob/master/correlation%20value.PNG)

This shows the reduction of correlation value among network filters
