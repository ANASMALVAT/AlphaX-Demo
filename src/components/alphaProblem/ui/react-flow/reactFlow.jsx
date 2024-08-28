import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  MarkerType,
  SelectionMode
} from 'reactflow';
import CustomNode from './CustomNode';
import 'reactflow/dist/style.css';
 

const nodeTypes = {
  custom: CustomNode,
};

const initNodes = []
const initEdges = []

export default function OverviewFlow({questionVisualizationData}) {

  const [middelX, setMiddleX] = useState(0);

  useEffect(() => {

  if(questionVisualizationData){

    const tempNodes = []
    const tempEdges = []

    const dependentNodes = questionVisualizationData?.dependant || [];
    const dependingNodes = questionVisualizationData?.depending || [];

    const tempMiddleX = (dependentNodes.length - 1) * 300 / 2;

    tempNodes.push({
      id: questionVisualizationData.question_id,
      type:"custom",
      data:{question_id:questionVisualizationData.question_id, question_name:questionVisualizationData.question_name},
      position: {x: tempMiddleX < 200 ? 200 : tempMiddleX , y:200},
    })

    dependentNodes.forEach((node, index) => {

      tempNodes.push({
          id: node?.question_id,
          type: 'custom',
          data: node,
          position: { x: index * 300, y: 0 },
          
        });

        tempEdges.push({
          id:node?.question_id,
          source:node?.question_id,
          target:questionVisualizationData?.question_id,
          animated: true,
          markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 20,
            height: 20,
            color: '#FF0072',
          },
          style: {
            strokeWidth: 2,
            stroke: '#FF0072',
          },
        })
      });

      dependingNodes.forEach((node, index) => {
        tempNodes.push({
          id: node?.question_id,
          type: 'custom',
          data: node,
          position: { x: index * 300, y: 400 },
        });

        tempEdges.push({
          id:`${node.question_id}#${questionVisualizationData?.question_id}`,
          source:questionVisualizationData?.question_id,
          target:node.question_id,
          animated: true,
          markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 20,
            height: 20,
            color: '#4C5ADF',
          },
          style: {
            strokeWidth: 2,
            stroke: '#4C5ADF',
          },
        })
      });

      setNodes(tempNodes);
      setEdges(tempEdges);
    }

  },[])

  const nodeTypes = {
    custom: CustomNode,
};


  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);
 
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
 
  return (
    <div style={{ width: '100vw', height: '100vh',borderRadius:"10px" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        selectionMode={SelectionMode.Full}
        
        className=' custom-scrollbar bg-teal-50'
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}