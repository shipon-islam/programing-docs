import ContentTable from "@/components/ContentTable";
import {
  advancedFeatures,
  arrayListOperations,
  objectOperations,
  stringOperations,
  timersAndScheduling,
} from "@/constant/programe";

export default function Home() {
  return (
    <main className="wrapper">
      <div>
        <h1 className="text-4xl font-semibold">
          Comparison Between JavaScript and Python
        </h1>
        <p className="my-8">
          This document provides a comprehensive comparison between JavaScript
          and Python functionalities, methods, and advanced features.
        </p>
      </div>
      <hr />
      <ContentTable
        tittle="1.string operations"
        programApi={stringOperations}
      />
      <ContentTable
        tittle="2. Array/List Operations"
        programApi={arrayListOperations}
      />
      <ContentTable
        tittle="3. Object/Dictionary Operations"
        programApi={objectOperations}
      />
      <ContentTable
        tittle="4. Timers and Scheduling"
        programApi={timersAndScheduling}
      />
      <ContentTable
        tittle="5. Advanced Features"
        programApi={advancedFeatures}
      />
    </main>
  );
}
